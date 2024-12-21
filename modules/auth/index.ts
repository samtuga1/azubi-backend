import { Router } from "express";
import REGISTER_USER from "./controllers/register.controller";
import CHECK_USER from "./controllers/check.controller";
import LOGIN_USER from "./controllers/login.controller";
import GET_USER from "./controllers/get.controller";
const router = Router();

router.post("/login", LOGIN_USER);

router.post("/register", REGISTER_USER);

router.post("/check", CHECK_USER);

router.post("/user/:id", GET_USER);

export default router;
