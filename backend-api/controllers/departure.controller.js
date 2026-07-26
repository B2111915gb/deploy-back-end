// backend-api\controllers\departure.controller.js
const db = require("../db");

exports.createDeparturePoint = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ status: "fail", message: "Name is required" });
  }

  db("departure_points")
    .insert({ name })
    .returning(["id", "name"])
    .then(([departurePoint]) => {
      res.status(201).json({
        status: "success",
        data: {
          id: departurePoint.id,
          name: departurePoint.name,
        },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to create departure point",
      });
    });
};

exports.getAllDeparturePoints = (req, res) => {
  db("departure_points")
    .select("*")
    .then((departurePoints) => {
      res.json({
        status: "success",
        data: departurePoints,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to retrieve departure points",
      });
    });
};

exports.getDeparturePointById = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      status: "fail",
      message: "ID is required",
    });
  }
  db("departure_points")
    .where({ id })
    .first()
    .then((departurePoint) => {
      if (!departurePoint) {
        return res.status(404).json({
          status: "fail",
          message: "Departure point not found",
        });
      }
      res.json({
        status: "success",
        data: departurePoint,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to retrieve departure point",
      });
    });
};

exports.updateDeparturePoint = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id || !name) {
    return res.status(400).json({
      status: "fail",
      message: "ID and Name are required",
    });
  }

  db("departure_points")
    .where({ id })
    .update({ name })
    .then((count) => {
      if (count === 0) {
        return res.status(404).json({
          status: "fail",
          message: "Departure point not found",
        });
      }
      res.json({
        status: "success",
        data: { message: "Departure point updated successfully" },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to update departure point",
      });
    });
};

exports.deleteDeparturePoint = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: "fail",
      message: "ID is required",
    });
  }

  db("departure_points")
    .where({ id })
    .del()
    .then((count) => {
      if (count === 0) {
        return res.status(404).json({
          status: "fail",
          message: "Departure point not found",
        });
      }
      res.json({
        status: "success",
        data: { message: "Departure point deleted successfully" },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to delete departure point",
      });
    });
};
