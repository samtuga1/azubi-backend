import { NextFunction, Request, Response } from "express";

import { HttpStatus } from "../utils/http_status";
import ResponseHandler from "../handlers/response.handler";
import ApiError from "../utils/api_error";

// Not Found Error handler
const NotFoundErrorHandler: any = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const message = "Resource not found";
  const statusCode = HttpStatus.NotFound;
  const error: ApiError = new Error(message);
  error.stack = res.req?.originalUrl;
  error.statusCode = statusCode;

  return new ResponseHandler(res).error(new ApiError(message, statusCode));
};

export default NotFoundErrorHandler;
