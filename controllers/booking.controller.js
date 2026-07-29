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

exports.cancelBooking = async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.userId;
  const isAdmin = req.user?.role === "admin";

  try {
    const result = await db.transaction(async (trx) => {
      const booking = await trx("bookings").where({ id }).first();
      if (!booking) {
        throw { statusCode: 404, message: "Không tìm thấy vé" };
      }

      // Chỉ chủ vé hoặc admin mới được hủy
      if (!isAdmin && booking.user_id !== userId) {
        throw { statusCode: 403, message: "Bạn không có quyền hủy vé này" };
      }

      await trx("bookings").where({ id }).del();

      const [updatedRoute] = await trx("routes")
        .where({ id: booking.route_id })
        .increment("available_seats", 1)
        .returning("*");

      return { booking, updatedRoute };
    });

    // Bắn sự kiện real-time cập nhật số ghế trống cho tất cả client đang mở trang Schedule
    if (result.updatedRoute) {
      broadcast("seat-update", {
        route_id: result.updatedRoute.id,
        available_seats: result.updatedRoute.available_seats,
      });
    }

    res.json({ status: "success", message: "Hủy vé thành công" });
  } catch (err) {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res
      .status(statusCode)
      .json({ status: "error", message: err.message || "Hủy vé thất bại" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await db("bookings")
      .join("routes", "bookings.route_id", "routes.id")
      .join("departure_points", "routes.departure_id", "departure_points.id")
      .join(
        "destination_points",
        "routes.destination_id",
        "destination_points.id"
      )
      .join("users", "bookings.user_id", "users.id")
      .select(
        "bookings.id",
        "bookings.seat_number",
        "bookings.booking_date",
        "bookings.passenger_name",
        "bookings.passenger_phone",
        "users.id as user_id",
        "users.username",
        "users.email",
        "departure_points.name as departure_name",
        "destination_points.name as destination_name",
        "routes.departure_time",
        "routes.price"
      )
      .orderBy("routes.departure_time", "desc");

    res.json({ status: "success", data: bookings });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ status: "error", message: "Failed to fetch all bookings" });
  }
};

exports.getUserBookings = async (req, res) => {
  const user_id = req.user?.userId;

  if (!user_id) {
    return res
      .status(400)
      .json({ status: "error", message: "User ID is required" });
  }

  try {
    const bookings = await db("bookings")
      .join("routes", "bookings.route_id", "routes.id")
      .join("departure_points", "routes.departure_id", "departure_points.id")
      .join(
        "destination_points",
        "routes.destination_id",
        "destination_points.id"
      )
      .where({ "bookings.user_id": user_id })
      .select(
        "bookings.id",
        "bookings.seat_number",
        "bookings.booking_date",
        "bookings.passenger_name",
        "bookings.passenger_phone",
        "departure_points.name as departure_name",
        "destination_points.name as destination_name",
        "routes.departure_time",
        "routes.price"
      )
      .orderBy("routes.departure_time", "desc");

    res.json({ status: "success", data: bookings });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ status: "error", message: "Failed to fetch bookings" });
  }
};