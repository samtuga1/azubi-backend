import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../../../handlers/response.handler";
import { CakeService } from "../service";
import ApiError from "../../../utils/api_error";
import { HttpStatus } from "../../../utils/http_status";

const UPDATE_SINGLE_CAKE = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const { content, instruction } = req.body;

    const cake = await CakeService.updateSingle({
      id: Number(id),
      content,
      instruction,
    });

    if (!cake) {
      throw new ApiError("Cake not found", HttpStatus.NotFound);
    }

    return new ResponseHandler(res).successWithData({
      cake: cake,
    });
  } catch (error) {
    next(error);
  }
};

export default UPDATE_SINGLE_CAKE;
