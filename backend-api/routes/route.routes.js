// backend-api\routes\route.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/route.controller");
const { searchRoutes } = require("../controllers/route.controller");
const { verifyToken, requireAdmin } = require("../middlewares/auth");
const routeCtrl = require("../controllers/route.controller");
const httpCache = require("../middlewares/httpCache.middleware");
const { addClient, removeClient } = require("../utils/sse"); // 👈 thêm dòng này

router.get("/", httpCache({ noCache: true }), controller.getAllRoutes);
router.get("/search", httpCache({ noCache: true }), searchRoutes);
router.post("/", verifyToken, requireAdmin, routeCtrl.createRoute);
router.put("/:id", verifyToken, requireAdmin, routeCtrl.updateRoute);
router.delete("/:id", verifyToken, requireAdmin, routeCtrl.deleteRoute);

// 👇 Route mới: SSE stream cho cập nhật số ghế real-time
router.get("/stream", (req, res) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  res.flushHeaders();

  // Gửi ngay 1 sự kiện xác nhận đã kết nối
  res.write(
    `event: connected\ndata: ${JSON.stringify({ message: "SSE connected" })}\n\n`,
  );

  addClient(res);

  // Giữ kết nối sống, tránh bị proxy/browser tự đóng do timeout
  const heartbeat = setInterval(() => {
    res.write(`: heartbeat\n\n`);
  }, 30000);

  req.on("close", () => {
    clearInterval(heartbeat);
    removeClient(res);
  });
});

module.exports = router;
