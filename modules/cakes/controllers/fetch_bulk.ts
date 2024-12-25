import { Request, Response, NextFunction } from "express";
import {
  getPaginationParams,
  setPaginationParams,
} from "../../../utils/functions";
import ResponseHandler from "../../../handlers/response.handler";
import { CakeService } from "../service";

const FETCH_BULK_CAKES = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const moduleId = req.query.moduleId as any;
  try {
    const { pageNumber, pageSize } = setPaginationParams(
      req.query.pageNumber?.toString(),
      req.query.pageSize?.toString()
    );

    const { total, cakes } = await CakeService.fetchPaginatedBulk(
      {
        skip: pageNumber,
        limit: pageSize,
      },
      Number(moduleId)
    );

    return new ResponseHandler(res).successWithData({
      cakes: cakes,
      pagination: getPaginationParams(total, pageNumber, cakes.length),
    });
  } catch (error) {
    next(error);
  }
};

export default FETCH_BULK_CAKES;
