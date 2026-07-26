// backend-api\routes\departure.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/destination.controller");
const { verifyToken, requireAdmin } = require("../middlewares/auth");
const httpCache = require("../middlewares/httpCache.middleware"); // 👈 thêm dòng này

router.post("/", verifyToken, requireAdmin, controller.createDestinationPoint);

router.get(
  "/",
  verifyToken,
  httpCache({ maxAge: 300 }),
  controller.getAllDestinationPoints,
);

router.get(
  "/:id",
  verifyToken,
  httpCache({ maxAge: 300 }),
  controller.getDestinationPointById,
);

router.put(
  "/:id",
  verifyToken,
  requireAdmin,
  controller.updateDestinationPoint,
);

router.delete(
  "/:id",
  verifyToken,
  requireAdmin,
  controller.deleteDestinationPoint,
);

module.exports = router;
