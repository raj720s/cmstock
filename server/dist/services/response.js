"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
// Function to send a success response
const successResponse = (res, message, data, status = 200) => {
    return res.status(status).json({
        success: true,
        message,
        data,
    });
};
exports.successResponse = successResponse;
// Function to send an error response
const errorResponse = (res, message, status = 500) => {
    return res.status(status).json({
        success: false,
        error: message,
    });
};
exports.errorResponse = errorResponse;
