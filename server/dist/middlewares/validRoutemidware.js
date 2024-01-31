"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidRouteHandlerMiddleware = void 0;
// <------------------------------------------Invalid Routes Middleware-------------------------------->
const invalidRouteHandlerMiddleware = (req, res, next) => {
    try {
        return res.status(404).json({});
    }
    catch (error) {
        next(error);
    }
};
exports.invalidRouteHandlerMiddleware = invalidRouteHandlerMiddleware;
