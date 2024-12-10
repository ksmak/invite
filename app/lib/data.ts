import prisma from "./db";

export const getInvitationCategories = async () => {
    return prisma.invitationCategory.findMany();
};

export const getInvitationCategoryById = async (id: string) => {
    return prisma.invitationCategory.findUnique({
        where: {
            id: id
        }
    })
}