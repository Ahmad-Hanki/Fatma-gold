import Container from "@/components/Container";
import prisma from "@/db/prisma";
import BudgetClient from "./_components/BudgetClient";
import MotionDiv from "@/components/MotionDiv";

const BudgetPage = async () => {
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
          <MotionDiv
            initial={{
              y:30,
              opacity:0
            }}
            whileHover={{
              y:0,
              opacity:1
            }}
          className="h-[70vh] w-full grid place-content-center">
            <h1 className="text-3xl sm:text-5xl text-center">
              المكان خال. عد في وقت لاحق ....
            </h1>
          </MotionDiv>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <BudgetClient data={data} />
      </Container>
    </div>
  );
};

export default BudgetPage;
