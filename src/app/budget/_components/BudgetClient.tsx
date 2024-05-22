import { Product } from "@prisma/client";
import BudgetCart from "./BudgetCart";
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

const BudgetClient = ({ data }: DashboardClientProps) => {
  
  return (
    <div className="pb-12">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {data.map((item) => {
          return <BudgetCart key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default BudgetClient;
