/*
  Warnings:

  - Added the required column `description` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "description" TEXT NOT NULL;
