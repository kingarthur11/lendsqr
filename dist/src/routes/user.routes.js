"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
class UserRoutes extends user_controller_1.UserController {
    constructor() {
        super();
        this.routes = () => {
            this.router.post('/create_account', this.createUserAccpAsync);
            this.router.get('/', this.getUserAsync);
        };
        this.router = (0, express_1.Router)();
        this.routes();
    }
}
exports.default = new UserRoutes();
//# sourceMappingURL=user.routes.js.map