exports.seed = async function (knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex("departure_points").del();
  await knex("destination_points").del();

  await knex("departure_points").insert([
    {
      id: 1,
      name: "BX An Hữu - An Hữu",
    },
    {
      id: 2,
      name: "BX An Khê - An Khê",
    },
    {
      id: 3,
      name: "BX Mỹ Đình - Hà Nội",
    },
  ]);

  await knex("destination_points").insert([
    {
      id: 1,
      name: "BX Miền Tây - TP.HCM",
    },
    {
      id: 2,
      name: "BX Miền Đông - TP.HCM",
    },
    {
      id: 3,
      name: "BX Cần Thơ - Cần Thơ",
    },
  ]);
};
