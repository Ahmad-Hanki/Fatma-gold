import Container from "@/components/Container";
import prisma from "@/db/prisma";
import DetailsBig from "./_components/DetailsBig";
import { redirect } from "next/navigation";
import DetailSmall from "./_components/DetailsSmall";

interface DetailsPageProps {
  params: {
    id: string;
  };
}
const DetailsPage = async ({ params }: DetailsPageProps) => {
  const data = await prisma.product.findFirst({
    where: {
      id: params.id,
    },
    include: {
      images: true,
    },
  });

  if (data == null) {
    redirect('/budget');
  }

  return (
    <div className="pb-12">
      <Container>
        <div className="hidden sm:block">
          <DetailsBig data={data} />
        </div>
        <div className="sm:hidden ">
            <DetailSmall
            data={data}
            />
        </div>
      </Container>
    </div>
  );
};

export default DetailsPage;
