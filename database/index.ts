import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "error",
    },
  ],
  errorFormat: "pretty",
});

export const DBCONNECT = async (callback: () => void) => {
  try {
    await prismaClient.$connect();
    prismaClient.$on("error", (event: any) => {
      console.log("error", event.message);
    });
    console.log(`Database connected`);

    // Run callback function
    callback();
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
