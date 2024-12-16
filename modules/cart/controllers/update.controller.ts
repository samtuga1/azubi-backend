import { Request, NextFunction, Response } from "express";
import ApiError from "../../../utils/api_error";
import { HttpStatus } from "../../../utils/http_status";
import ResponseHandler from "../../../handlers/response.handler";
import CartService from "../service";

const UPDATE_CART_ITEM_QUANTITY = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const cartItem = await CartService.updateCartItem(Number(id), {
      quantity: Number(quantity),
    });

    if (cartItem == null) {
      throw new ApiError("Not found", HttpStatus.NotFound);
    }

    return new ResponseHandler(res).successWithData(cartItem);
  } catch (error) {
    next(error);
  }
};

export default UPDATE_CART_ITEM_QUANTITY;
