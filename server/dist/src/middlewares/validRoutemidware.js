// <------------------------------------------Invalid Routes Middleware-------------------------------->
export const invalidRouteHandlerMiddleware = (req, res, next) => {
    try {
        return res.status(404).json({});
    }
    catch (error) {
        next(error);
    }
};
