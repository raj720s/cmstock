"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const morgan_1 = __importDefault(require("morgan"));
const validRoutemidware_1 = require("./middlewares/validRoutemidware");
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
const PORT = process.env.PORT;
const SERVER_PORT = PORT || 3000;
app.use(express_1.default.json());
app.use('*', validRoutemidware_1.invalidRouteHandlerMiddleware);
app.listen(SERVER_PORT, () => {
    console.log('Listening on PORT', SERVER_PORT);
});
