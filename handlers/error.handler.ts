import { NextFunction, Request, Response } from "express";

import { HttpStatus } from "../utils/http_status";
import ResponseHandler from "../handlers/response.handler";
import ApiError from "../utils/api_error";

const Errorhandler: any = (
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let message = err.message ?? "Something went wrong";
  const statusCode = err.statusCode ?? HttpStatus.InternalServerError;

  if (statusCode >= 500) message = "Internal server error";

  return new ResponseHandler(res).error(new ApiError(message, statusCode));
};

export default Errorhandler;
