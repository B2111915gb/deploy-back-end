// backend-api/controllers/route.controller.js

const db = require("../db");

// =========================
// Tìm kiếm tuyến xe
// =========================
exports.searchRoutes = async (req, res) => {
  const { departure_id, destination_id, departure_date } = req.query;

  try {
    let query = db("routes")
      .leftJoin(
        "departure_points",
        "routes.departure_id",
        "departure_points.id"
      )
      .leftJoin(
        "destination_points",
        "routes.destination_id",
        "destination_points.id"
      )
      .select(
        "routes.*",
        "departure_points.name as departure_name",
        "destination_points.name as destination_name"
      );

    if (departure_id) {
      query.where("routes.departure_id", departure_id);
    }

    if (destination_id) {
      query.where("routes.destination_id", destination_id);
    }

    if (departure_date) {
      query.whereRaw("DATE(routes.departure_time) = ?", [departure_date]);
    }

    const routes = await query;

    res.json({
      status: "success",
      data: routes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Lỗi server",
    });
  }
};

// =========================
// Lấy tất cả tuyến xe
// =========================
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await db("routes")
      .leftJoin(
        "departure_points",
        "routes.departure_id",
        "departure_points.id"
      )
      .leftJoin(
        "destination_points",
        "routes.destination_id",
        "destination_points.id"
      )
      .select(
        "routes.*",
        "departure_points.name as departure_name",
        "destination_points.name as destination_name"
      );

    res.json({
      status: "success",
      data: routes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Lỗi server",
    });
  }
};

// =========================
// Thêm tuyến
// =========================
exports.createRoute = async (req, res) => {
  const {
    departure_id,
    destination_id,
    bus_type_id,
    departure_time,
    duration_hours,
    price,
    currency = "VND",
    available_seats,
  } = req.body;

  try {
    const [newRoute] = await db("routes")
      .insert({
        departure_id,
        destination_id,
        bus_type_id,
        departure_time,
        duration_hours,
        price,
        currency,
        available_seats,
      })
      .returning("*");

    res.status(201).json({
      status: "success",
      data: newRoute,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Tạo tuyến thất bại",
    });
  }
};

// =========================
// Cập nhật tuyến
// =========================
exports.updateRoute = async (req, res) => {
  const { id } = req.params;

  const {
    departure_id,
    destination_id,
    bus_type_id,
    departure_time,
    duration_hours,
    price,
    currency = "VND",
    available_seats,
  } = req.body;

  try {
    await db("routes")
      .where({ id })
      .update({
        departure_id,
        destination_id,
        bus_type_id,
        departure_time,
        duration_hours,
        price,
        currency,
        available_seats,
      });

    res.json({
      status: "success",
      message: "Sửa tuyến thành công",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Sửa tuyến thất bại",
    });
  }
};

// =========================
// Xóa tuyến
// =========================
exports.deleteRoute = async (req, res) => {
  const { id } = req.params;

  try {
    await db("routes")
      .where({ id })
      .del();

    res.json({
      status: "success",
      message: "Xóa tuyến thành công",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Xóa tuyến thất bại",
    });
  }
};