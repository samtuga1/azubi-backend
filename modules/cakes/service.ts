import { Prisma } from "@prisma/client";
import { IPagination } from "../../interfaces/pagination";
import prisma from "../../prisma/prisma";

export class CakeService {
  static fetchPaginatedBulk = async (
    payload: IPagination,
    moduleId: number
  ) => {
    try {
      const total = await prisma.cake.count();
      const cakes = await prisma.cake.findMany({
        skip: (payload.skip - 1) * payload.limit,
        where: {
          moduleId,
        },
        omit: {
          moduleId: true,
        },
        take: payload.limit,
        orderBy: {
          createdAt: "desc",
        },
      });

      return { total, cakes };
    } catch (error) {
      throw error;
    }
  };

  static async updateSingle({
    id,
    content,
    instruction,
  }: {
    id: number;
    content?: string;
    instruction?: string;
  }) {
    try {
      const updateOptions: Prisma.CakeUpdateInput = {};

      if (content) {
        updateOptions.content = content;
      }

      if (instruction) {
        updateOptions.instruction = instruction;
      }

      return await prisma.module.update({
        where: {
          id,
        },
        data: updateOptions,
      });
    } catch (error) {
      throw error;
    }
  }
}
