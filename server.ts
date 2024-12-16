// server.ts (or wherever you initialize your app)
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { ErrorHandler, NotFoundErrorHandler } from "./handlers";
import path from "path";
import ROUTES from "./routes";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: false, origin: true, preflightContinue: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(`/api/v1`, ROUTES);

// Error Handler middleware
app.use(ErrorHandler);
app.use(NotFoundErrorHandler);

const server = app;

export default app;
export { server };
