/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username", 128).notNullable();
    tbl.string("email", 128).notNullable();
    tbl.string("phone_number", 128).notNullable();
    tbl.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
