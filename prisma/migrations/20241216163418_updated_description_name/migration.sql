/*
  Warnings:

  - You are about to drop the column `descriprion` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "descriprion",
ADD COLUMN     "description" TEXT;
