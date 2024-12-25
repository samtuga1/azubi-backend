import { Router } from "express";
import FETCH_SINGLE_MODULE from "./controllers/fetch_single";
import UPDATE_SINGLE_MODULE from "./controllers/update.controller";
import FETCH_BULK_MODULES from "./controllers/fetch_bulk";

const router = Router();

router.get("/", FETCH_BULK_MODULES as any);

router.get("/:id", FETCH_SINGLE_MODULE as any);

router.patch("/:id", UPDATE_SINGLE_MODULE as any);

export default router;
