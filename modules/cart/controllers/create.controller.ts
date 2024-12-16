import { Request, Response, NextFunction } from "express";
import ResponseHandler from "../../../handlers/response.handler";
import CartService from "../service";

const CREATE_CART_ITEMS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    console.log(data);

    const cartItem = await CartService.addToCart(
      data.map((d: any) => {
        return {
          productId: Number(d.productId),
          quantity: Number(d.quantity),
        };
      })
    );

    return new ResponseHandler(res).successWithData(cartItem);
  } catch (error) {
    next(error);
  }
};

export default CREATE_CART_ITEMS;
