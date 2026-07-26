const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("users").del();

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await knex("users").insert([
    {
      username: "admin",
      email: "admin@baobinhbus.com",
      password: hashedPassword,
      full_name: "System Administrator",
      phone_number: "0900000000",
      role: "admin",
    },
  ]);
};
