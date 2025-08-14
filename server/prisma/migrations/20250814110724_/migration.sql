/*
  Warnings:

  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Menu" DROP CONSTRAINT "Menu_parentId_fkey";

-- DropTable
DROP TABLE "public"."Menu";

-- CreateTable
CREATE TABLE "public"."HeaderMenu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "HeaderMenu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HeaderMenu_id_key" ON "public"."HeaderMenu"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HeaderMenu_name_key" ON "public"."HeaderMenu"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HeaderMenu_slug_key" ON "public"."HeaderMenu"("slug");
