"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeResponse = void 0;
const constants_1 = require("../constants/constants");
function makeResponse(data, statusCode = constants_1.HttpStatusCode.OK, errorMessage = '') {
    return { data, statusCode, errorMessage };
}
exports.makeResponse = makeResponse;
//# sourceMappingURL=baseResponse.js.map