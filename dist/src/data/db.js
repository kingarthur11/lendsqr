"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../../knexfile"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.NODE_ENV);
const env = process.env.NODE_ENV || 'development';
const options = knexfile_1.default[env];
const knexInstance = (0, knex_1.default)(options);
exports.default = knexInstance;
//# sourceMappingURL=db.js.map