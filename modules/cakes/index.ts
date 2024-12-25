import { Router } from "express";
import FETCH_BULK_CAKES from "./controllers/fetch_bulk";
import UPDATE_SINGLE_CAKE from "./controllers/update.controller";

const router = Router();

router.get("/", FETCH_BULK_CAKES as any);

router.patch("/:id", UPDATE_SINGLE_CAKE as any);

export default router;
