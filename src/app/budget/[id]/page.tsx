import Container from "@/components/Container";
import prisma from "@/db/prisma";

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
    orderBy: {
      createAt: "desc",
    },
    include: {
      images: true,
    },
  });
  return (
    <div>
      <Container>
        <div className="hidden sm:block"></div>
        <div className="sm:hidden"></div>
      </Container>
    </div>
  );
};

export default DetailsPage;
