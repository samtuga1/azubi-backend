import { Prisma } from "@prisma/client";
import { IPagination } from "../../interfaces/pagination";
import prisma from "../../prisma/prisma";

export default class ProductService {
  static fetchPaginatedBulk = async (payload: IPagination) => {
    try {
      const total = await prisma.product.count();
      const products = await prisma.product.findMany({
        skip: (payload.skip - 1) * payload.limit,
        take: payload.limit,
        orderBy: {
          createdAt: "desc",
        },
      });

      return { total, products };
    } catch (error) {
      throw error;
    }
  };

  static fetchSingle = async (id: number) => {
    try {
      return prisma.product.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  static create = async (payload: any) => {
    try {
      const product = await prisma.product.create({
        data: {
          title: payload.title,
          description: payload.description,
          photo: payload.photo,
          price: payload.price,
        },
      });

      return product;
    } catch (error) {
      throw error;
    }
  };

  static delete = async (id: number) => {
    try {
      await prisma.product.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  static update = async (payload: any) => {
    const data: Prisma.ProductUpdateInput = {};

    for (const key in payload) {
      if (key in data) {
        (data as any)[key] = payload[key];
      }
    }

    try {
      const product = await prisma.product.update({
        where: {
          id: payload.id,
        },
        data: {
          title: payload.title,
          description: payload.description,
          photo: payload.photo,
          price: payload.price,
        },
      });

      return product;
    } catch (error) {
      throw error;
    }
  };
}
