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
exports.WalletController = void 0;
const wallet_service_1 = __importDefault(require("../services/wallet.service"));
class WalletController extends wallet_service_1.default {
    constructor() {
        super(...arguments);
        this.fundWalletAsync = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.fundWalletService(req.body);
            return res.status(data.statusCode).json(data);
        });
        this.transferFundDataAsync = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.transferFundsServiceAsync(req.body);
            return res.status(data.statusCode).json(data);
        });
        this.withdrawFundDataAsync = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.withdrawFundsServiceAsync(req.body);
            return res.status(data.statusCode).json(data);
        });
        this.getUserWalletAsync = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getWallet(req);
            return res.status(data.statusCode).json(data);
        });
    }
}
exports.WalletController = WalletController;
//# sourceMappingURL=wallet.controller.js.map