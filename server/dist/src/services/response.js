// Function to send a success response
export const successResponse = (res, message, data, status = 200) => {
    return res.status(status).json({
        success: true,
        message,
        data,
    });
};
// Function to send an error response
export const errorResponse = (res, message, status = 500) => {
    return res.status(status).json({
        success: false,
        error: message,
    });
};
