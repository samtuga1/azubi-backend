import { Response } from "express";

import EnvConstants from "../constants/env.constants";
import ApiError from "../utils/api_error";
import { HttpStatus } from "../utils/http_status";

export default class ResponseHandler {
  constructor(public res: Response) {}

  failure(message: string) {
    this.res.status(HttpStatus.Success).json({
      success: false,
      message,
    });
    return this;
  }

  success(message: string) {
    this.res.status(HttpStatus.Success).json({
      success: true,
      message,
    });
    return this;
  }

  successWithData<T>(data: T) {
    this.res.status(HttpStatus.Success).json({
      success: true,
      data,
    });
    return this;
  }

  error(error: ApiError) {
    this.res.status(error.statusCode ?? HttpStatus.InternalServerError).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });

    return this;
  }
}
