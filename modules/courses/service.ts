import { Prisma } from "@prisma/client";
import { IPagination } from "../../interfaces/pagination";
import prisma from "../../prisma/prisma";

export class ModuleService {
  static async fetchSingle(id: number) {
    try {
      return await prisma.module.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateSingle({
    id,
    title,
    description,
  }: {
    id: number;
    title?: string;
    description?: string;
  }) {
    try {
      const updateOptions: Prisma.ModuleUpdateInput = {};

      if (title) {
        updateOptions.title = title;
      }

      if (description) {
        updateOptions.description = description;
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

  static fetchPaginatedBulk = async (payload: IPagination) => {
    try {
      const total = await prisma.module.count();
      const modules = await prisma.module.findMany({
        skip: (payload.skip - 1) * payload.limit,
        take: payload.limit,
        orderBy: {
          createdAt: "desc",
        },
      });

      return { total, modules };
    } catch (error) {
      throw error;
    }
  };
}
