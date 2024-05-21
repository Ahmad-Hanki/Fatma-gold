"use server";

import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";

export const chosenImageProductAction = async (
  id: string,
  productId: string
) => {
  try {
    await prisma.$transaction([
      prisma.image.updateMany({
        where: { productId },
        data: { isPrimary: false }, // Reset isPrimary for all images of the product
      }),
      prisma.image.update({
        where: { id },
        data: { isPrimary: true }, // Set chosen image as primary
      }),
    ]);

    revalidatePath("/dashboard");
  } catch (err) {}
};
