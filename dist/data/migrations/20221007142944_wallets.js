"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.up = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.createTable("wallets", (tbl) => {
            tbl.increments();
            tbl.integer("user_id", 8, 2).notNullable();
            tbl.decimal("amount", 8, 2).defaultTo(0.00);
            tbl.string("wallet_no", 8, 2).notNullable();
            tbl.decimal("ledger_balance", 8, 2).defaultTo(0.00);
            tbl.decimal("available_balance", 8, 2).defaultTo(0.00);
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        });
    });
};
exports.down = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.dropTableIfExists("wallets");
    });
};
//# sourceMappingURL=20221007142944_wallets.js.map