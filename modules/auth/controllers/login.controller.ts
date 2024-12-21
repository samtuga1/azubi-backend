import { NextFunction, Request, Response } from "express";
import AccountService from "../../account/service";
import ApiError from "../../../utils/api_error";
import ResponseHandler from "../../../handlers/response.handler";
import { HttpStatus } from "../../../utils/http_status";

export default async function LoginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password } = req.body;

    var user = await AccountService.fetchSingle({ username });

    if (!user) {
      throw new ApiError(
        "No account is associated with this email address",
        HttpStatus.NotFound
      );
    }

    if (user?.password !== password) {
      throw new ApiError("Incorrect password", HttpStatus.BadRequest);
    }

    new ResponseHandler(res).successWithData({
      user: user,
    });
  } catch (error) {
    next(error);
  }
}
