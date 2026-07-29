// backend-api\routes\departure.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/departure.controller");
const { verifyToken, requireAdmin } = require("../middlewares/auth");
const httpCache = require("../middlewares/httpCache.middleware"); // 👈 thêm dòng này

router.post("/", verifyToken, requireAdmin, controller.createDeparturePoint);

// 👇 thêm httpCache({ maxAge: 300 }) vào giữa verifyToken và controller
router.get(
  "/",
  
  httpCache({ maxAge: 300 }),
  controller.getAllDeparturePoints,
);

router.get(
  "/:id",
  
  httpCache({ maxAge: 300 }),
  controller.getDeparturePointById,
);

router.put("/:id", verifyToken, requireAdmin, controller.updateDeparturePoint);

router.delete(
  "/:id",
  verifyToken,
  requireAdmin,
  controller.deleteDeparturePoint,
);

module.exports = router;
