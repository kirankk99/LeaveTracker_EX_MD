import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const errorHandler = (
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
};
