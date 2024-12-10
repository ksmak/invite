-- CreateTable
CREATE TABLE "InvitationCard" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "invitaionCategoryId" TEXT,
    "config" JSONB[],

    CONSTRAINT "InvitationCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvitaionCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "config" JSONB[],

    CONSTRAINT "InvitaionCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvitationCard" ADD CONSTRAINT "InvitationCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvitationCard" ADD CONSTRAINT "InvitationCard_invitaionCategoryId_fkey" FOREIGN KEY ("invitaionCategoryId") REFERENCES "InvitaionCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
