import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../../../handlers/response.handler";
import ProdcutService from "../service";

const DELETE_PRODUCT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    await ProdcutService.delete(Number(id));

    return new ResponseHandler(res).success(
      "Product has been deleted successfully"
    );
  } catch (error) {
    next(error);
  }
};

export default DELETE_PRODUCT;
