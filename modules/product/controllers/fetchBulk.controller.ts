import { Request, Response, NextFunction } from "express";
import {
  getPaginationParams,
  setPaginationParams,
} from "../../../utils/functions";
import ProductService from "../service";
import ResponseHandler from "../../../handlers/response.handler";

const FETCH_BULK_PRODUCTS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { pageNumber, pageSize } = setPaginationParams(
      req.query.pageNumber?.toString(),
      req.query.pageSize?.toString()
    );

    const { total, products } = await ProductService.fetchPaginatedBulk({
      skip: pageNumber,
      limit: pageSize,
    });

    return new ResponseHandler(res).successWithData({
      products: products,
      pagination: getPaginationParams(total, pageNumber, products.length),
    });
  } catch (error) {
    next(error);
  }
};

export default FETCH_BULK_PRODUCTS;
