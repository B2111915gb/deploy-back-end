// backend-api/migrations/20250720000002_create_routes_table.js
exports.up = function (knex) {
  return knex.schema.createTable("routes", function (table) {
    table.increments("id").primary();
    table
      .integer("departure_id")
      .notNullable()
      .references("id")
      .inTable("departure_points");
    table
      .integer("destination_id")
      .notNullable()
      .references("id")
      .inTable("destination_points");
    table.integer("bus_type_id").notNullable();
    table.timestamp("departure_time").notNullable();
    table.float("duration_hours").notNullable();
    table.integer("price").notNullable();
    table.string("currency").defaultTo("VND");
    table.integer("available_seats").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("routes");
};
