import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../../../handlers/response.handler";
import { ModuleService } from "../service";
import ApiError from "../../../utils/api_error";
import { HttpStatus } from "../../../utils/http_status";

const FETCH_SINGLE_MODULE = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const module = await ModuleService.fetchSingle(Number(id));

    if (!module) {
      throw new ApiError("Module not found", HttpStatus.NotFound);
    }

    return new ResponseHandler(res).successWithData({
      module: module,
    });
  } catch (error) {
    next(error);
  }
};

export default FETCH_SINGLE_MODULE;
