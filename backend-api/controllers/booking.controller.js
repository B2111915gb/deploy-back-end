// backend-api\controllers\booking.controller.js
const db = require("../db");
const { broadcast } = require("../utils/sse");

exports.createBooking = async (req, res) => {
  const {
    user_id,
    route_id,
    seat_number,
    booking_date,
    passenger_name,
    passenger_phone,
  } = req.body;

  try {
    const result = await db.transaction(async (trx) => {
      const route = await trx("routes").where({ id: route_id }).first();
      if (!route) {
        throw { statusCode: 404, message: "Không tìm thấy tuyến xe" };
      }
      if (route.available_seats <= 0) {
        throw { statusCode: 400, message: "Tuyến xe đã hết ghế" };
      }

      const existing = await trx("bookings")
        .where({ route_id, booking_date, seat_number })
        .first();
      if (existing) {
        throw { statusCode: 409, message: "Ghế này đã được đặt" };
      }

      const [booking] = await trx("bookings")
        .insert({
          user_id,
          route_id,
          seat_number,
          booking_date,
          passenger_name,
          passenger_phone,
        })
        .returning("*");

      const [updatedRoute] = await trx("routes")
        .where({ id: route_id })
        .decrement("available_seats", 1)
        .returning("*");

      return { booking, updatedRoute };
    });

    // Bắn sự kiện real-time cho tất cả client đang mở trang Schedule
    broadcast("seat-update", {
      route_id: result.updatedRoute.id,
      available_seats: result.updatedRoute.available_seats,
    });

    res.status(201).json({ status: "success", data: result.booking });
  } catch (err) {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res
      .status(statusCode)
      .json({ status: "error", message: err.message || "Booking failed" });
  }
};

exports.getUserBookings = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res
      .status(400)
      .json({ status: "error", message: "User ID is required" });
  }

  try {
    const bookings = await db("bookings").where({ user_id }).select("*");
    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ status: "success", data: [], message: "No bookings found" });
    }
    res.json({ status: "success", data: bookings });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ status: "error", message: "Failed to fetch bookings" });
  }
};
