// import bcrypt from "bcrypt";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import EnvConstants from "../constants/env.constants";

// export const GeneratePIN = (length: number = 5): string => {
//   // generate random {length} digits PIN code
//   let pin = "";
//   for (let i = 0; i < length; i++) {
//     pin += Math.floor(Math.random() * 10);
//   }

//   return pin;
// };

// export const BcryptPassword = async (length = 5) => {
//   // encrypt password using bcrypt
//   const PIN = GeneratePIN(length);
//   const HashedPIN = await GenerateBcryptPassword(PIN);
//   return {
//     PIN,
//     HashedPIN,
//   };
// };

// export const GenerateBcryptPassword = async (PIN: string): Promise<string> => {
//   const salt = await bcrypt.genSalt(10);
//   const HashedPIN = await bcrypt.hash(PIN, salt);
//   return HashedPIN;
// };

// export const ComparePassword = async (
//   password: string,
//   hashedPassword: string
// ): Promise<boolean> => {
//   // compare password with hashed password
//   return await bcrypt.compare(password, hashedPassword);
// };

// export const GenerateAccessToken = (payload: any): string => {
//   const accessToken = jwt.sign(payload, EnvConstants.JWT_ACCESS_SECRET);

//   return accessToken;
// };

// export const VerifyAccessToken = async (token: string) => {
//   // verify token
//   try {
//     let secret = EnvConstants.JWT_ACCESS_SECRET;

//     return jwt.verify(token, secret);
//   } catch (_) {}
// };
