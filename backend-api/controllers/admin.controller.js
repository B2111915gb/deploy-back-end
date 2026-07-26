const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db"); // knex instance
const { getToken, removeToken } = require("../utils/auth");

exports.register = async (req, res) => {
  try {
    const { username, email, password, full_name, phone_number } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await db("users").insert({
      username,
      email,
      password: hashedPassword,
      full_name,
      phone_number,
      role: "admin", // Gán mặc định là admin
    });

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal Server Error", detail: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db("users").where({ email }).first();

    if (!user || user.role !== "admin") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = getToken(user);
    res.status(200).json({
      token,
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal Server Error", detail: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Admin logged out" });
  } catch (err) {
    res.status(500).json({ error: "Logout failed", detail: err.message });
  }
};
