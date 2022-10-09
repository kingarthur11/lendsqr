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
const db_1 = __importDefault(require("../data/db"));
const baseResponse_1 = require("../contracts/baseResponse");
const constants_1 = require("../constants/constants");
class UserServices {
    constructor() {
        this.addUserServiceAsync = (createUserDTO) => __awaiter(this, void 0, void 0, function* () {
            const wallet_no = Math.floor(Math.random() * (10000000 - 9999999999 + 1) + 10000000);
            const users = yield (0, db_1.default)('users').insert(createUserDTO).returning([]);
            const wallet = yield (0, db_1.default)('wallets').insert({ wallet_no }).returning([]);
            return (0, baseResponse_1.makeResponse)([users, wallet], constants_1.HttpStatusCode.OK);
        });
    }
}
exports.default = UserServices;
//# sourceMappingURL=user.service.js.map