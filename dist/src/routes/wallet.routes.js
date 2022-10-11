"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wallet_controller_1 = require("../controller/wallet.controller");
class WalletRoutes extends wallet_controller_1.WalletController {
    constructor() {
        super();
        this.routes = () => {
            this.router.post('/fund', this.fundWalletAsync);
            this.router.post('/transfer', this.transferFundDataAsync);
            this.router.post('/withdraw', this.withdrawFundDataAsync);
            this.router.get('/', this.getUserWalletAsync);
        };
        this.router = (0, express_1.Router)();
        this.routes();
    }
}
exports.default = new WalletRoutes();
//# sourceMappingURL=wallet.routes.js.map