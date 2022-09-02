/*
  Warnings:

  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Items` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `name`,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Items_name_key` ON `Items`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);
