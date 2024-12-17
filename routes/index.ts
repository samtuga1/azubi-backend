import { NextFunction, Request, Response, Router } from "express";
import PRODUCT_MODULE from "../modules/product";
import CART_MODULE from "../modules/cart";

const router = Router();

router.use("/products", PRODUCT_MODULE);
router.use("/cart", CART_MODULE);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      message: "Welcome to AZUBI API",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
