require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const apiLimiter = require("./middlewares/rateLimit.middleware");

const swaggerDocument = require("./docs/openapiSpec.json");

const adminRoutes = require("./routes/admin.route");

const app = express();

// ========================
// Middleware
// ========================
app.use(cors());
app.use(express.json());

// Rate limiting cho toàn bộ API
app.use("/api", apiLimiter);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ========================
// Routes
// ========================
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/routes", require("./routes/route.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));
app.use("/api/admin", adminRoutes);
app.use("/api/departure-points", require("./routes/departure.routes"));
app.use("/api/destination-points", require("./routes/destination.route"));

// ========================
// Default Route
// ========================
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// ========================
// Start Server
// ========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📄 Swagger UI: http://localhost:${PORT}/api-docs`);
});
