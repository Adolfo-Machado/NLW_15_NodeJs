-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "envent_id" TEXT NOT NULL,
    CONSTRAINT "attendees_envent_id_fkey" FOREIGN KEY ("envent_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
