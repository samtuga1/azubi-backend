import { NextFunction, Request, Response, Router } from "express";
import PRODUCT_MODULE from "../modules/product";
import CART_MODULE from "../modules/cart";
import AUTH_MODULE from "../modules/auth";
import COURSE_MODULE from "../modules/courses";
import CAKES_MODULE from "../modules/cakes";

const router = Router();

router.use("/products", PRODUCT_MODULE);
router.use("/cart", CART_MODULE);
router.use("/auth", AUTH_MODULE);
router.use("/module", COURSE_MODULE);
router.use("/cake", CAKES_MODULE);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      message: "Welcome to PRODIGAL API",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
