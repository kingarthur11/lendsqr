"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCode[HttpStatusCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatusCode[HttpStatusCode["FORBIDEN"] = 403] = "FORBIDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCode[HttpStatusCode["VALIDATION_ERROR"] = 422] = "VALIDATION_ERROR";
    HttpStatusCode[HttpStatusCode["NOT_PROCCESSED"] = 422] = "NOT_PROCCESSED";
    HttpStatusCode[HttpStatusCode["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
//# sourceMappingURL=constants.js.map