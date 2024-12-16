import { Router } from "express";

import FETCH_BULK_PRODUCTS from "./controllers/fetchBulk.controller";
import CREATE_PRODUCT from "./controllers/create.controller";
import FETCH_SINGLE_PRODUCT from "./controllers/fetch_single.controller";
import DELETE_PRODUCT from "./controllers/delete.controller";

const router = Router();

router.get("/", FETCH_BULK_PRODUCTS as any);

router.get("/:id", FETCH_SINGLE_PRODUCT as any);

router.delete("/:id", DELETE_PRODUCT as any);

router.put(
  "/",
  // IS_LOGGEDIN,
  // USER_MUST_BE([AppConstants.ROLES.admin, AppConstants.ROLES.super_admin]),
  // multer({
  //   storage: diskStorage({
  //     destination: "uploads/",
  //   }),
  //   fileFilter(req, file, cb) {
  //     return filterImageFile(req, file, cb);
  //   },
  // }).single("photo"),
  // ValidationMiddleware(InterestsValidation.create),
  // MediaService.handleMedia,
  CREATE_PRODUCT as any
);

export default router;
