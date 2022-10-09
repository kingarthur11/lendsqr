"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
const express_1 = __importDefault(require("express"));
const Startup_1 = require("./Startup");
class Program extends Startup_1.Startup {
    constructor() {
        super((0, express_1.default)());
        this.buildConfigurations();
    }
    buildConfigurations() {
        this.useApplicationMiddlewares();
        this.setGlobalRoutesPrefix('/api/v1');
        this.setTestApplicationRoutes();
        this.catchUnknownRoutes();
    }
    Run() {
        this.initialize();
    }
}
exports.Program = Program;
new Program().Run();
//# sourceMappingURL=Program.js.map