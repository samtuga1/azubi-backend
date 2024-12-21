import prisma from "../../prisma/prisma";
import { Prisma } from "@prisma/client";

export default class AccountService {
  static async fetchSingle(payload: any) {
    try {
      const options: Prisma.UserFindFirstArgs = {
        where: {},
      };

      if (payload.username) {
        options.where!.username = payload.username;
      }
      if (payload.password) {
        options.where!.password = payload.password;
      }

      return await prisma.user.findFirst(options);
    } catch (error) {
      throw error;
    }
  }

  static async findById(id: number) {
    try {
      return await prisma.user.findUnique({
        where: {
          id: id,
        },
        omit: {
          password: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async checkExistense(username: string) {
    try {
      const exists = await prisma.user.findFirst({
        where: {
          username,
        },
      });

      return !!exists;
    } catch (error) {
      throw error;
    }
  }
}
