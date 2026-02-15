/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Framework` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[github_link]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Framework` required. This step will fail if there are existing NULL values in that column.
  - Made the column `github_link` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Framework" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "github_link" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Framework_name_key" ON "Framework"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Project_github_link_key" ON "Project"("github_link");
