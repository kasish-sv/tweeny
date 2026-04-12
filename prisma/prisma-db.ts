import { prisma } from "./prismaconnector";

export async function getTaskTypes() {
  return await prisma.tASK_TYPE.findMany(
    {
        orderBy: {
            TASK_NAME: 'asc'
        }
    }
  );
}