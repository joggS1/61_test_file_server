"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ws_1 = __importDefault(require("express-ws"));
const cors_1 = __importDefault(require("cors"));
const logMiddleWare_1 = require("../middlewares/logMiddleWare");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_ws_1.default)((0, express_1.default)()).app;
//Enable CORS
app.use((0, cors_1.default)({ origin: true }));
//------------------Middlewares-------------------
app.use(logMiddleWare_1.logMiddleware);
//------------------------------------------------
app.use(body_parser_1.default.json());
//-------------------HTTP api---------------------
const routes = express_1.default.Router();
require('./http/file').default(routes);
app.use('/api', routes);
app.get('/', (req, res) => {
    res.status(200).json('Server started');
});
//------------------------------------------------
exports.default = app;
//# sourceMappingURL=index.js.map