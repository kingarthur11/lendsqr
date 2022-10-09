/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("wallets", (tbl) => {
    tbl.increments();
    tbl.integer("user_id", 8, 2).notNullable();
    tbl.decimal("amount", 8, 2).defaultTo(0.00);
    tbl.string("wallet_no").notNullable();
    tbl.decimal("ledger_balance", 8, 2).defaultTo(0.00);
    tbl.decimal("available_balance", 8, 2).defaultTo(0.00);
    tbl.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("wallets");
};