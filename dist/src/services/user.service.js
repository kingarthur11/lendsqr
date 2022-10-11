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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const db_1 = __importDefault(require("../data/db"));
const baseResponse_1 = require("../contracts/baseResponse");
const constants_1 = require("../constants/constants");
class UserServices {
    constructor() {
        this.addUserServiceAsync = (createUserDTO) => __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet_no = Math.floor(Math.random() * (10000000000 - 9999999999 + 1) + 10000000);
                const users = yield (0, db_1.default)('users').insert(createUserDTO).returning(['id', 'username', 'email', 'phone_number', 'created_at']).then(ramda_1.head);
                const id = yield (users === null || users === void 0 ? void 0 : users.id);
                const wallet = yield (0, db_1.default)('wallets').insert({ wallet_no, user_id: id }).returning(['id', 'user_id', 'wallet_no', 'ledger_balance', 'available_balance', 'created_at']).then(ramda_1.head);
                return (0, baseResponse_1.makeResponse)({ users, wallet }, constants_1.HttpStatusCode.OK);
            }
            catch (error) {
                return (0, baseResponse_1.makeResponse)(null, constants_1.HttpStatusCode.INTERNAL_ERROR, error.message);
            }
        });
        this.getUser = (req) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            let user = yield (0, db_1.default)('users').where({ id }).select('id', 'username', 'email', 'phone_number', 'created_at').then(ramda_1.head);
            return (0, baseResponse_1.makeResponse)(user, constants_1.HttpStatusCode.OK);
        });
    }
}
exports.default = UserServices;
//# sourceMappingURL=user.service.js.map