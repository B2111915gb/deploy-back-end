// backend-api\routes\booking.routes.js
const { verifyToken, requireAdmin } = require("../middlewares/auth");

const express = require("express");
const router = express.Router();
const bookingCtrl = require("../controllers/booking.controller");

router.post("/", verifyToken, bookingCtrl.createBooking);
router.get("/", verifyToken, bookingCtrl.getUserBookings);
router.delete("/:id", verifyToken, bookingCtrl.cancelBooking);
router.get("/all", verifyToken, requireAdmin, bookingCtrl.getAllBookings);

module.exports = router;