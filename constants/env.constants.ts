import "dotenv/config";

export default class EnvConstants {
  // server
  static readonly PORT = Number(process.env.PORT ?? 5000);
  // database
  static readonly DATABESE_URL = process.env.DATABESE_URL ?? "";
}
