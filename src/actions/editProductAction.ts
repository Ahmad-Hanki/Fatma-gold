"use server";

import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";

interface editProductionActionProps {
  id: string;
  name: string;
  description: string;
  price?: string;
  images?: string[];
}
const editProductAction = async ({
  name,
  description,
  price,
  id,
  images = [],
}: editProductionActionProps) => {
  if (!name || !description || !id) {
    return 0;
  }

  try {
    await prisma.product.update({
      where: {
        id,
      },
      data: {
        description,
        name,
        price,
      },
    });

    if (images.length > 0) {
        
      await prisma.image.deleteMany({
        where: {
          productId: id,
        },
      });

      const imageData = images.map((imageUrl) => ({
        imageUrl,
        productId: id,
      }));

      await prisma.image.createMany({
        data: imageData,
      });
    }

    revalidatePath("/dashboard");
    revalidatePath("/budget");

    return 1
  } catch (err) {
    console.error(err);
    return -1;
  }
};

export default editProductAction;
