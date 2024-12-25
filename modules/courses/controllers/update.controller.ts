import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../../../handlers/response.handler";
import { ModuleService } from "../service";
import ApiError from "../../../utils/api_error";
import { HttpStatus } from "../../../utils/http_status";

const UPDATE_SINGLE_MODULE = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const { title, description } = req.body;

    const module = await ModuleService.updateSingle({
      id: Number(id),
      title,
      description,
    });

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

export default UPDATE_SINGLE_MODULE;
