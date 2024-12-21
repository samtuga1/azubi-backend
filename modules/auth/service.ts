import prisma from "../../prisma/prisma";

export default class UserAuthService {
  // register a new service provider
  static async register({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    return await prisma.user.create({
      data: {
        username,
        password,
      },
      omit: {
        password: true,
      },
    });
  }
}
