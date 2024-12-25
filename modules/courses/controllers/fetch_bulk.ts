import { Request, Response, NextFunction } from "express";
import {
  getPaginationParams,
  setPaginationParams,
} from "../../../utils/functions";
import ResponseHandler from "../../../handlers/response.handler";
import { ModuleService } from "../service";

const FETCH_BULK_MODULES = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { pageNumber, pageSize } = setPaginationParams(
      req.query.pageNumber?.toString(),
      req.query.pageSize?.toString()
    );

    const { total, modules } = await ModuleService.fetchPaginatedBulk({
      skip: pageNumber,
      limit: pageSize,
    });

    return new ResponseHandler(res).successWithData({
      modules: modules,
      pagination: getPaginationParams(total, pageNumber, modules.length),
    });
  } catch (error) {
    next(error);
  }
};

export default FETCH_BULK_MODULES;
