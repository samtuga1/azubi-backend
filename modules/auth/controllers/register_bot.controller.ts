import { NextFunction, Request, Response } from "express";
import UserAuthService from "../service";
import ResponseHandler from "../../../handlers/response.handler";
import AccountService from "../../account/service";
import ApiError from "../../../utils/api_error";
import { HttpStatus } from "../../../utils/http_status";
import { generateRandomFilename } from "../../../utils/functions";

export default async function RegisterBot(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // get request payload
    const { username, channel } = req.body;

    const password = generateRandomFilename();

    console.log(password);

    const exists = await AccountService.checkExistingBot(username);

    if (exists) {
      const user = await AccountService.findByChannel(username);
      return new ResponseHandler(res).successWithData({
        user,
      });
    }

    const user = await UserAuthService.register({
      username,
      password,
      channel,
      userType: "bot",
    });

    new ResponseHandler(res).successWithData({
      user,
    });
  } catch (error) {
    next(error);
  }
}
