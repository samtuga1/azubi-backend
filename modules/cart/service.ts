import { IPagination } from "../../interfaces/pagination";
import prisma from "../../prisma/prisma";

export default class CartService {
  static fetchPaginatedBulk = async (payload: IPagination) => {
    try {
      const total = await prisma.cartItem.count();
      const cartItems = await prisma.cartItem.findMany({
        skip: (payload.skip - 1) * payload.limit,
        include: {
          product: true,
        },
        take: payload.limit,
        orderBy: {
          createdAt: "desc",
        },
      });

      return { total, cartItems };
    } catch (error) {
      throw error;
    }
  };

  // POST /cart: Add multiple products to the cart
  static addToCart = async (
    payload: { productId: number; quantity: number }[]
  ) => {
    try {
      const cartId = 1; // Assuming a single cart; replace with dynamic cartId if needed

      const operations = payload.map(async (item) => {
        const { productId, quantity } = item;

        // Check if the product already exists in the cart
        const existingItem = await prisma.cartItem.findFirst({
          where: {
            productId,
            cartId,
          },
        });

        if (existingItem) {
          // Update quantity if the product is already in the cart
          return prisma.cartItem.update({
            where: { id: existingItem.id },
            data: {
              quantity: existingItem.quantity + quantity,
            },
          });
        } else {
          // Create a new cart item if it doesn't already exist
          return prisma.cartItem.create({
            data: {
              productId,
              quantity,
              cartId,
            },
          });
        }
      });

      // Execute all operations in parallel
      const results = await Promise.all(operations);

      return results; // Returns an array of updated/created cart items
    } catch (error) {
      throw error;
    }
  };

  static updateCartItem = async (id: number, payload: { quantity: number }) => {
    try {
      const updatedItem = await prisma.cartItem.update({
        where: { id },
        data: {
          quantity: payload.quantity,
        },
      });

      return updatedItem;
    } catch (error) {
      throw error;
    }
  };

  static removeFromCart = async (id: number) => {
    try {
      await prisma.cartItem.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  };
}
