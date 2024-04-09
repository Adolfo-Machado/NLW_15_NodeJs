/*
  Warnings:

  - A unique constraint covering the columns `[envent_id,email]` on the table `attendees` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "attendees_envent_id_email_key" ON "attendees"("envent_id", "email");
