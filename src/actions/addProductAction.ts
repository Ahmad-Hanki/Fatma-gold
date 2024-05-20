"use server";

import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface addProductionActionProps {
  name: string;
  description: string;
  price?: string;
}

const addProductAction = async ({
  name,
  description,
  price,
}: addProductionActionProps) => {
  console.log(name, description);
  if (!name || !description) {
    return 0;
  }

  try {
    await prisma.product.create({
      data: {
        name,
        description,
        price: price ?? "",
      },
    });
    revalidatePath("/dashboard");
  } catch (err) {
    console.error(err); 
    return -1;
  }
};

export default addProductAction;
