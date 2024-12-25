import prisma from "../../prisma/prisma";

export default class UserAuthService {
  // register a new service provider
  static async register({
    username,
    password,
    channel,
    userType,
  }: {
    username: string;
    password: string;
    channel?: string | undefined;
    userType: "normal" | "bot";
  }) {
    return await prisma.user.create({
      data: {
        username,
        channel,
        password,
        userType,
      },
      omit: {
        password: true,
      },
    });
  }
}
