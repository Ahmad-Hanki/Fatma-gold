"use server";

import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface addProductionActionProps {
  id: string;
}

export const deleteProductAction = async ({ id }: addProductionActionProps) => {
  if (!id) {
    return 0;
  }

  try {
    const data = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (data) {
      await prisma.product.delete({
        where: {
          id,
        },
      });
      revalidatePath("/dashboard");
      revalidatePath("/budget");

      return 1;
    }
    return 0;
  } catch (err) {
    console.table(err);
    return -1;
  }
};

export default deleteProductAction;
