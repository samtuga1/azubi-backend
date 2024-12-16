import { Request, NextFunction, Response } from "express";
import ApiError from "../../../utils/api_error";
import { HttpStatus } from "../../../utils/http_status";
import ResponseHandler from "../../../handlers/response.handler";
import ProducService from "../service";

const FETCH_SINGLE_PRODUCT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const product = await ProducService.fetchSingle(Number(id));

    if (product == null) {
      throw new ApiError("Not found", HttpStatus.NotFound);
    }

    return new ResponseHandler(res).successWithData(product);
  } catch (error) {
    next(error);
  }
};

export default FETCH_SINGLE_PRODUCT;
