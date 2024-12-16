import { Request, Response, NextFunction } from "express";
import {
  getPaginationParams,
  setPaginationParams,
} from "../../../utils/functions";
import CartService from "../service";
import ResponseHandler from "../../../handlers/response.handler";

const FETCH_BULK_CART_ITEMS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { pageNumber, pageSize } = setPaginationParams(
      req.query.pageNumber?.toString(),
      req.query.pageSize?.toString()
    );

    const { total, cartItems } = await CartService.fetchPaginatedBulk({
      skip: pageNumber,
      limit: pageSize,
    });

    return new ResponseHandler(res).successWithData({
      cartItems: cartItems,
      pagination: getPaginationParams(total, pageNumber, cartItems.length),
    });
  } catch (error) {
    next(error);
  }
};

export default FETCH_BULK_CART_ITEMS;
