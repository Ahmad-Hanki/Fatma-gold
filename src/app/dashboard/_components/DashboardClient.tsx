import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import Link from "next/link";
import DataCard from "./DataCard";
interface Image {
  id: string;
  imageUrl: string;
  productId: string;
  isPrimary: boolean; 
}

type ProductWithImages = Product & { images: Image[] };

interface DashboardClientProps {
  data: ProductWithImages[];
}
const DashboardClient = ({ data }: DashboardClientProps) => {
  return (
    <div>
      <Container>
        <div className="space-y-6">
          <div>
            <Link href={"/dashboard/add"}>
              <Button className="p-5">+</Button>
            </Link>
          </div>
          <div>
            <div className="flex flex-col gap-5 justify-center items-center">
              {data.map((item) => {
                return <DataCard data={item}key={item.id}/>;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardClient;
