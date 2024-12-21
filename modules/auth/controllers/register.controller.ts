import { NextFunction, Request, Response } from "express";
import UserAuthService from "../service";
import ResponseHandler from "../../../handlers/response.handler";
import AccountService from "../../account/service";
import ApiError from "../../../utils/api_error";
import { HttpStatus } from "../../../utils/http_status";
export default async function RegisterUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // get request payload
    const { username, password } = req.body;

    const exists = await AccountService.checkExistense(username);

    if (exists) {
      throw new ApiError(
        "Username is associated with another account",
        HttpStatus.Conflict
      );
    }

    const user = await UserAuthService.register({ username, password });

    new ResponseHandler(res).successWithData({
      user,
    });
  } catch (error) {
    next(error);
  }
}
