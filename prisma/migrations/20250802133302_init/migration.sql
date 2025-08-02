/*
  Warnings:

  - You are about to drop the column `smell` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `suitableFor` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `smell`,
    DROP COLUMN `suitableFor`;
