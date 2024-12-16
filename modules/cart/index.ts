import { Router } from "express";
import FETCH_BULK_CART_ITEMS from "./controllers/fetchBulk.controller";
import UPDATE_CART_ITEM_QUANTITY from "./controllers/update.controller";
import CREATE_CART_ITEMS from "./controllers/create.controller";
import DELETE_CART_ITEM from "./controllers/delete.controller";

const router = Router();

router.get("/", FETCH_BULK_CART_ITEMS as any);

router.get("/:id", UPDATE_CART_ITEM_QUANTITY as any);

router.put("/", CREATE_CART_ITEMS as any);

router.delete("/:id", DELETE_CART_ITEM as any);

export default router;
