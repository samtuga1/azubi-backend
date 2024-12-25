/*
  Warnings:

  - Added the required column `title` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "title" TEXT NOT NULL;
