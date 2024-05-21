import ProductForm from "@/components/ProductForm";
import prisma from "@/db/prisma";
import { redirect } from "next/navigation";

interface EditPageProps {
  params: {
    edit: string;
  };
}
const EditPage = async ({ params }: EditPageProps) => {
  const data = await prisma.product.findFirst({
    where: {
      id: params.edit,
    },
    include: {
      images: true,
    },
  });

  if (!data) redirect("/dashboard");

  return (
    <div>
      <ProductForm data={data} />
    </div>
  );
};

export default EditPage;
