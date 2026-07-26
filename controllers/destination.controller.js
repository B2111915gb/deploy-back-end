// backend-api\controllers\departure.controller.js
const db = require("../db");

exports.createDestinationPoint = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ status: "fail", message: "Name is required" });
  }

  db("destination_points")
    .insert({ name })
    .returning(["id", "name"])
    .then(([destination_points]) => {
      res.status(201).json({
        status: "success",
        data: {
          id: destination_points.id,
          name: destination_points.name,
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

exports.getAllDestinationPoints = (req, res) => {
  db("destination_points")
    .select("id", "name")
    .then((destination_points) => {
      res.status(200).json({
        status: "success",
        data: destination_points,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to retrieve destination points",
      });
    });
};

exports.getDestinationPointById = (req, res) => {
  const { id } = req.params;

  db("destination_points")
    .where({ id })
    .select("id", "name")
    .then((destination_points) => {
      if (destination_points.length === 0) {
        return res.status(404).json({
          status: "fail",
          message: "Destination point not found",
        });
      }
      res.status(200).json({
        status: "success",
        data: destination_points[0],
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to retrieve destination point",
      });
    });
};

exports.updateDestinationPoint = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Name is required",
    });
  }

  db("destination_points")
    .where({ id })
    .update({ name })
    .returning(["id", "name"])
    .then(([destinationPoint]) => {
      if (!destinationPoint) {
        return res.status(404).json({
          status: "fail",
          message: "Destination point not found",
        });
      }
      res.status(200).json({
        status: "success",
        data: {
          id: destinationPoint.id,
          name: destinationPoint.name,
        },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to update destination point",
      });
    });
};

exports.deleteDestinationPoint = (req, res) => {
  const { id } = req.params;

  db("destination_points")
    .where({ id })
    .del()
    .then((count) => {
      if (count === 0) {
        return res.status(404).json({
          status: "fail",
          message: "Destination point not found",
        });
      }
      res.status(200).json({
        status: "success",
        data: { message: "Destination point deleted successfully" },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: "Failed to delete destination point",
      });
    });
};
