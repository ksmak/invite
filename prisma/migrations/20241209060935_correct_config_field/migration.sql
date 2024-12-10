/*
  Warnings:

  - The `config` column on the `InvitationCard` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `config` column on the `InvitationCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "InvitationCard" DROP COLUMN "config",
ADD COLUMN     "config" JSONB;

-- AlterTable
ALTER TABLE "InvitationCategory" DROP COLUMN "config",
ADD COLUMN     "config" JSONB;
