// backend-api\routes\booking.routes.js
const { verifyToken, requireAdmin } = require("../middlewares/auth");

const express = require("express");
const router = express.Router();
const bookingCtrl = require("../controllers/booking.controller");

router.post("/", bookingCtrl.createBooking);
router.get("/", bookingCtrl.getUserBookings);
router.get("/all", verifyToken, requireAdmin, async (req, res) => {
  try {
    const allBookings = await db("bookings").select("*");
    res.json({ status: "success", data: allBookings });
  } catch (err) {
    res.status(500).json({ message: "Internal error" });
  }
});

module.exports = router;
