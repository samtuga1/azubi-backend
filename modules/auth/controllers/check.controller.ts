import { NextFunction, Request, Response } from "express";
import AccountService from "../../account/service";
import ResponseHandler from "../../../handlers/response.handler";

export default async function CheckUserExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username } = req.body;

    var exists = await AccountService.checkExistense(username);

    new ResponseHandler(res).successWithData({
      exist: exists,
    });
  } catch (error) {
    next(error);
  }
}
