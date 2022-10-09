"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const wallet_routes_1 = __importDefault(require("./wallet.routes"));
class Routes {
    constructor() {
        this.applicationRoutes = () => {
            this.router.use('/user', user_routes_1.default.router);
            this.router.use('/wallet', wallet_routes_1.default.router);
        };
        this.router = (0, express_1.Router)();
        this.applicationRoutes();
    }
}
exports.default = new Routes();
//# sourceMappingURL=index.js.map