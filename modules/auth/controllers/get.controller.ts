import { NextFunction, Request, Response } from "express";
import AccountService from "../../account/service";
import ResponseHandler from "../../../handlers/response.handler";

export default async function GET_USER(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    var user = await AccountService.findById(Number(id));

    new ResponseHandler(res).successWithData({
      user,
    });
  } catch (error) {
    next(error);
  }
}
