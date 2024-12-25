-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('normal', 'bot');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "channel" TEXT,
ADD COLUMN     "userType" "UserType" NOT NULL DEFAULT 'normal';
