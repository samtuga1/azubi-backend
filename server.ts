import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { ErrorHandler, NotFoundErrorHandler } from "./handlers";
import path from "path";

import ROUTES from "./routes";

declare module "express-serve-static-core" {
  interface Request {
    media: string | null;
  }
}

const CreateServer = (): express.Application => {
  dotenv.config();

  // init APP
  const APP = express();
  APP.use(cookieParser());
  APP.use(express.json());
  APP.use(express.urlencoded({ extended: true }));
  APP.use(cors({ credentials: false, origin: true, preflightContinue: true }));
  APP.use(express.static(path.join(__dirname, "public")));

  // Routes
  APP.use(`/api/v1`, ROUTES);

  // Error Handler middleware
  APP.use(ErrorHandler);

  APP.use(NotFoundErrorHandler);

  return APP;
};

export default CreateServer;
