import {NextFunction, Request, Response, response} from 'express'

// <------------------------------------------Invalid Routes Middleware-------------------------------->
export const invalidRouteHandlerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(404).json({})
  } catch (error) {
    next(error)
  }
}
