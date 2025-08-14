/*
  Warnings:

  - You are about to drop the column `layout` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `layoutType` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Menu_id_key";

-- AlterTable
ALTER TABLE "public"."Menu" DROP COLUMN "layout",
ADD COLUMN     "fullPath" TEXT,
ADD COLUMN     "layoutType" TEXT NOT NULL,
ADD COLUMN     "localOrder" INTEGER,
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "path" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Menu" ADD CONSTRAINT "Menu_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
