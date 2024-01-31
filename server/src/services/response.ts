import {Request, Response} from 'express'

// Function to send a success response
export const successResponse = (res: Response, message: string, data: any, status = 200): Response => {
  return res.status(status).json({
    success: true,
    message,
    data,
  })
}

// Function to send an error response
export const errorResponse = (res: Response, message: string, status = 500): Response => {
  return res.status(status).json({
    success: false,
    error: message,
  })
}
