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
        yield knex.schema.createTable("users", (tbl) => {
            tbl.increments();
            tbl.string("username", 128).notNullable();
            tbl.string("email", 128).notNullable();
            tbl.string("phone_number", 128).notNullable();
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        });
    });
};
exports.down = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.dropTableIfExists("users");
    });
};
//# sourceMappingURL=20221007142911_users.js.map