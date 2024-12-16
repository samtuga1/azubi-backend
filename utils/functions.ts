import crypto from "crypto";
import path from "path";
import ApiError from "./api_error";
import { HttpStatus } from "./http_status";
import { Request } from "express";
import multer from "multer";
import AppConstants from "../constants/app.constants";

export const getPaginationParams = (
  count: number,
  pageNumber: number,
  pageSize: number
) => {
  return {
    pageNumber: pageNumber * pageSize < count ? pageNumber + 1 : 1,
    pageSize: pageSize <= count ? pageSize : count > 100 ? 100 : count,
    totalCount: count,
  };
};

// Passed directly from the request query
export const setPaginationParams = (pageNumber?: string, pageSize?: string) => {
  let _pageNumber = Number(pageNumber) || 1;

  if (_pageNumber < 1) {
    _pageNumber = 1;
  }

  let _pageSize = Number(pageSize) || 10;

  if (_pageSize < 1) {
    _pageSize = 10;
  }

  return { pageNumber: _pageNumber, pageSize: _pageSize };
};

export const generateRandomFilename = (extension?: string): string => {
  const randomBytes = crypto.randomBytes(16);
  const randomHex = randomBytes.toString("hex");

  if (extension) {
    return `${randomHex}${extension}`;
  }

  return randomHex;
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const EncodeBase64 = (plainString: string): string => {
  return Buffer.from(plainString, "utf8").toString("base64");
};

export const DecodeBase64 = (encodedString: string): string => {
  return Buffer.from(encodedString, "base64").toString("utf-8");
};

export const TryParseBoolean = (val: any): Boolean | null => {
  if (typeof val === "boolean") {
    return val;
  }

  if (val === "true") return true;

  if (val === "false") return false;

  return null;
};

export const filterImageFile = (
  req: Request,
  file: any,
  cb: multer.FileFilterCallback,
  allowedExtensions: string[] = AppConstants.SUPPORTED_IMAGE_TYPES,
  maxFileSize: number = AppConstants.MAX_IMAGE_SIZE
): void => {
  const extname = path.extname(file.originalname).toLowerCase();

  if (
    allowedExtensions &&
    allowedExtensions.length !== 0 &&
    !allowedExtensions.includes(extname)
  ) {
    const error = new ApiError(
      `Only ${allowedExtensions.join(", ")} files are allowed`,
      HttpStatus.UnprocessableEntity
    );
    return cb(error);
  }

  const content_length = req.headers["content-length"];

  if (content_length && maxFileSize) {
    // get file size in mb
    const fileSize = parseInt(content_length) / (1024 * 1024);

    const maxSizeInMB = maxFileSize / (1024 * 1024);

    if (fileSize > maxSizeInMB) {
      const error = new ApiError(
        `File size exceeds ${maxSizeInMB}MB`,
        HttpStatus.UnprocessableEntity
      );
      return cb(error);
    }
  }

  cb(null, true);
};
