/*
  Warnings:

  - You are about to drop the column `invitaionCategoryId` on the `InvitationCard` table. All the data in the column will be lost.
  - You are about to drop the `InvitaionCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InvitationCard" DROP CONSTRAINT "InvitationCard_invitaionCategoryId_fkey";

-- AlterTable
ALTER TABLE "InvitationCard" DROP COLUMN "invitaionCategoryId",
ADD COLUMN     "invitationCategoryId" TEXT;

-- DropTable
DROP TABLE "InvitaionCategory";

-- CreateTable
CREATE TABLE "InvitationCategory" (
    "id" TEXT NOT NULL,
    "name_kz" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "config" JSONB[],

    CONSTRAINT "InvitationCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvitationCard" ADD CONSTRAINT "InvitationCard_invitationCategoryId_fkey" FOREIGN KEY ("invitationCategoryId") REFERENCES "InvitationCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
