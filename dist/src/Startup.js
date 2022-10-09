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
exports.Startup = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const moment_1 = __importDefault(require("moment"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const constants_1 = require("./constants/constants");
const baseResponse_1 = require("./contracts/baseResponse");
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
class Startup {
    constructor(app) {
        this.app = app;
        this.useApplicationMiddlewares = () => {
            this.app.set('json spaces', 4);
            this.app.set('trust proxy', true);
            this.app.use((0, cors_1.default)());
            this.app.use(body_parser_1.default.json());
            this.app.use((0, morgan_1.default)('dev'));
            this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        };
        this.initialize = () => {
            const message = '  App is running at http://localhost:%d in %s mode';
            const env = process.env.NODE_ENV;
            if (env === 'production')
                console.info('App is running on %s mode', env);
            else
                console.info(message, this.port, env);
            this.app.listen(this.port, () => {
                console.info('  **Press CTRL + C to stop**');
            });
        };
        this.catchUnknownRoutes = () => {
            this.app.use('/*', (_, res) => __awaiter(this, void 0, void 0, function* () {
                return res
                    .status(constants_1.HttpStatusCode.NOT_FOUND)
                    .json((0, baseResponse_1.makeResponse)(null, constants_1.HttpStatusCode.NOT_FOUND, 'Route not found'));
            }));
        };
        this.app = app;
        this.port = process.env.PORT || 4000;
        this.app_start = (0, moment_1.default)().unix();
    }
    testRoute() {
        console.log("hello");
        this.app.get('/test', (req, res) => {
            res.send('Express + TypeScript Server');
        });
    }
    setGlobalRoutesPrefix(prefix) {
        this.app.use(prefix, routes_1.default.router);
    }
    setTestApplicationRoutes() {
        const details = {
            message: 'Lendsqr is up and running',
            app_start: this.app_start,
        };
        this.app.get('/', (_, res) => __awaiter(this, void 0, void 0, function* () { return res.status(constants_1.HttpStatusCode.OK).json((0, baseResponse_1.makeResponse)(details, constants_1.HttpStatusCode.OK)); }));
        this.app.get('/api/v1', (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(constants_1.HttpStatusCode.OK).json((0, baseResponse_1.makeResponse)({
                message: `Lendsqr is up and running on ${req.hostname}`,
                app_start: this.app_start,
                path: req.originalUrl,
            }, constants_1.HttpStatusCode.OK));
        }));
    }
}
exports.Startup = Startup;
//# sourceMappingURL=Startup.js.map