/*
  Warnings:

  - You are about to drop the `HeaderMenu` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."HeaderMenu";

-- CreateTable
CREATE TABLE "public"."Menu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Menu_id_key" ON "public"."Menu"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_name_key" ON "public"."Menu"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_slug_key" ON "public"."Menu"("slug");
