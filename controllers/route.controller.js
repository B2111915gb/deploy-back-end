// backend-api\controllers\route.controller.js
const db = require("../db");

exports.searchRoutes = async (req, res) => {
  const { departure_id, destination_id } = req.query;

  try {
    const routes = await db("routes")
      .where({ departure_id, destination_id })
      .select("*");
    res.json({ status: "success", data: routes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server" });
  }
};

// Thêm tuyến mới
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

    res.status(201).json({ status: "success", data: newRoute });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Tạo tuyến thất bại" });
  }
};

// Sửa tuyến
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
    await db("routes").where({ id }).update({
      departure_id,
      destination_id,
      bus_type_id,
      departure_time,
      duration_hours,
      price,
      currency,
      available_seats,
    });
    res.json({ status: "success", message: "Sửa tuyến thành cong" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Sửa tuyến thất bại" });
  }
};

// Xóa tuyến
exports.deleteRoute = async (req, res) => {
  const { id } = req.params;
  try {
    await db("routes").where({ id }).del();
    res.json({ status: "success", message: "Xóa tuyến thành công" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Xóa tuyến thất bại" });
  }
};

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await db("routes").select("*");
    res.json({ status: "success", data: routes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server" });
  }
};
