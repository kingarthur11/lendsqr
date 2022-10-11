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
class WalletServices {
    constructor() {
        this.fundWalletService = (walletDTO) => __awaiter(this, void 0, void 0, function* () {
            const user_id = walletDTO.user_id;
            const wallet_no = walletDTO.wallet_no;
            const amount = walletDTO.amount;
            let ledger_balance;
            let available_balance;
            yield (0, db_1.default)('wallets').where({ user_id, wallet_no })
                .then((items) => {
                var _a, _b;
                const ledgerBalance = Number((_a = items[0]) === null || _a === void 0 ? void 0 : _a.ledger_balance);
                const availableBalance = Number((_b = items[0]) === null || _b === void 0 ? void 0 : _b.available_balance);
                ledger_balance = ledgerBalance + amount;
                available_balance = availableBalance + amount;
                (0, db_1.default)('wallets').where({ user_id, wallet_no }).update({ ledger_balance, available_balance });
            });
            return (0, baseResponse_1.makeResponse)('funds credited successfuly', constants_1.HttpStatusCode.OK);
        });
        this.transferFundsServiceAsync = (walletDTO) => __awaiter(this, void 0, void 0, function* () {
            const creditor_id = walletDTO.creditor_id;
            const debitor_id = walletDTO.debitor_id;
            const creditor_wallet_no = walletDTO.creditor_wallet_no;
            const debitor_wallet_no = walletDTO.debitor_wallet_no;
            const amount = walletDTO.amount;
            let ledger_balance;
            let available_balance;
            yield (0, db_1.default)('wallets').where({ user_id: creditor_id, wallet_no: creditor_wallet_no })
                .then((items) => {
                var _a, _b;
                const ledgerBalance = Number((_a = items[0]) === null || _a === void 0 ? void 0 : _a.ledger_balance);
                const availableBalance = Number((_b = items[0]) === null || _b === void 0 ? void 0 : _b.available_balance);
                ledger_balance = ledgerBalance + amount;
                available_balance = availableBalance + amount;
                (0, db_1.default)('wallets').where({ user_id: creditor_id, wallet_no: creditor_wallet_no }).update({ ledger_balance, available_balance });
            });
            yield (0, db_1.default)('wallets').where({ user_id: debitor_id, wallet_no: debitor_wallet_no })
                .then((items) => {
                var _a, _b;
                const ledgerBalance = Number((_a = items[0]) === null || _a === void 0 ? void 0 : _a.ledger_balance);
                const availableBalance = Number((_b = items[0]) === null || _b === void 0 ? void 0 : _b.available_balance);
                ledger_balance = ledgerBalance - amount;
                available_balance = availableBalance - amount;
                (0, db_1.default)('wallets').where({ user_id: debitor_id, wallet_no: debitor_wallet_no }).update({ ledger_balance, available_balance });
            });
            return (0, baseResponse_1.makeResponse)("funds transfered successfully", constants_1.HttpStatusCode.OK);
        });
        this.withdrawFundsServiceAsync = (walletDTO) => __awaiter(this, void 0, void 0, function* () {
            const user_id = walletDTO.user_id;
            const wallet_no = walletDTO.wallet_no;
            const amount = walletDTO.amount;
            let ledger_balance;
            let available_balance;
            yield (0, db_1.default)('wallets').where({ user_id, wallet_no })
                .then((items) => {
                var _a, _b;
                const ledgerBalance = Number((_a = items[0]) === null || _a === void 0 ? void 0 : _a.ledger_balance);
                const availableBalance = Number((_b = items[0]) === null || _b === void 0 ? void 0 : _b.available_balance);
                ledger_balance = ledgerBalance - amount;
                available_balance = availableBalance - amount;
                (0, db_1.default)('wallets').where({ user_id, wallet_no }).update({ ledger_balance, available_balance });
            });
            return (0, baseResponse_1.makeResponse)("funds withrawn successfully", constants_1.HttpStatusCode.OK);
        });
        this.getWallet = (req) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            let wallet = yield (0, db_1.default)('wallets').where({ id }).returning(['user_id', 'wallet_no', 'ledger_balance', 'available_balance']).then(ramda_1.head);
            return (0, baseResponse_1.makeResponse)(wallet, constants_1.HttpStatusCode.OK);
        });
    }
}
exports.default = WalletServices;
//# sourceMappingURL=wallet.service.js.map