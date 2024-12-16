import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../../../handlers/response.handler";
import CartService from "../service";

const DELETE_CART_ITEM = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    await CartService.removeFromCart(Number(id));

    return new ResponseHandler(res).success(
      "Cart item has been deleted successfully"
    );
  } catch (error) {
    next(error);
  }
};

export default DELETE_CART_ITEM;
