// backend-api/migrations/20250720000003_create_bookings_table.js
exports.up = function (knex) {
  return knex.schema.createTable("bookings", function (table) {
    table.increments("id").primary();
    table.integer("user_id").notNullable().references("id").inTable("users");
    table.integer("route_id").notNullable().references("id").inTable("routes");
    table.integer("seat_number").notNullable();
    table.date("booking_date").notNullable();
    table.string("passenger_name").notNullable();
    table.string("passenger_phone").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bookings");
};
