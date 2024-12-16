import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../../../handlers/response.handler";
import ProductService from "../service";

const CREATE_PRODUCT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, price } = req.body;

    const product = await ProductService.create({
      title,
      description,
      photo: (req as any).media,
      price: Number(price),
    });

    return new ResponseHandler(res).successWithData(product);
  } catch (error) {
    next(error);
  }
};

export default CREATE_PRODUCT;
