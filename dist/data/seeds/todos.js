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
exports.seed = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex('todos').del();
        yield knex('todos').insert([
            { id: 1, task: 'rowValue1' },
            { id: 2, task: 'rowValue2' },
            { id: 3, task: 'rowValue3' }
        ]);
    });
};
//# sourceMappingURL=todos.js.map