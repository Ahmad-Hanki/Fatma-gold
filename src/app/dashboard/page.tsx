import Container from "@/components/Container";
import prisma from "@/db/prisma";
import DashboardClient from "./_components/DashboardClient";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحة المشرف",
  description: "اضيفي و احذفي المعلومات بكل اريحية",
};

const ProductPage = async () => {
  const data = await prisma.product.findMany({
    orderBy: {
      createAt: "desc",
    },
    include: {
      images: true,
    },
  });
  if (!data || data.length < 1) {
    return (
      <div>
        <Container>
          <div>
            <Link href={"/dashboard/add"}>
              <Button className="p-5">+</Button>
            </Link>
          </div>
          <div className="h-[70vh] w-full grid place-content-center">
            <h1 className="text-3xl sm:text-5xl text-center">
              المكان خال. عليك اضافة منتجات....
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pb-12">
      <DashboardClient data={data} />
    </div>
  );
};

export default ProductPage;
