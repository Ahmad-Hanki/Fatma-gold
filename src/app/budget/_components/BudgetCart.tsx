import { Card } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Link from "next/link";
import defImage from "@/assets/defaultImage.png";
import Image, { StaticImageData } from "next/image";
import { formatDate } from "@/lib/formatter";
import { Whatsapp } from "@/assets/Whatsapp";
import MotionDiv from "@/components/MotionDiv";

interface Image {
  id: string;
  imageUrl: string;
  productId: string;
  isPrimary: boolean;
}

type ProductWithImages = Product & { images: Image[] };

interface DashboardClientProps {
  data: ProductWithImages;
}

const BudgetCart = ({ data }: DashboardClientProps) => {
  const phoneNumber = "+97470770668";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=لدي اهتمام في هذا المنتج: ${data.name} - ${data.description}`;

  let image: string | StaticImageData;
  const date = formatDate(data.createAt);
  const primaryImage =
    data.images.find((img) => img.isPrimary) || data.images[0];
  image = primaryImage ? primaryImage.imageUrl : defImage;
  return (
    <MotionDiv
    initial={{
      y: 30,
      opacity: 0,
    }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    viewport={{
      once:true,
      amount:0.6

    }}

    >
      <Card className="flex items-center flex-col justify-center gap-3 py-10">
        <div className="overflow-hidden relative w-[300px] aspect-[12/10]">
          <Image
            src={image}
            fill
            alt="photo"
            className="object-center object-contain"
          />
        </div>
        <h1 className="text-4xl ">{data.name}</h1>
        <p className="text-2xl brightness-90">{data.description}</p>
        {data.price && (
          <p className="text-2xl text-primary">{data.price} ريال قطري</p>
        )}

        <p className="text-2xl font-light">{date}</p>

        <div className="flex gap-5">
          <Link href={`/budget/${data.id}`} className="text-xl underline">
            تفاصيل
          </Link>
          <Link
            href={whatsappLink}
            className="text-xl flex gap-3 items-center underline"
          >
            <p>تواصل معي</p>
            <Whatsapp className="h-7 w-7" />
          </Link>
        </div>
      </Card>
    </MotionDiv>
  );
};

export default BudgetCart;
