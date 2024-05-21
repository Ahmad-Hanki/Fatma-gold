"use client";
import defImage from "@/assets/defaultImage.png";
import deleteProductAction from "@/actions/deleteProductAction";
import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { formatDate } from "@/lib/formatter";
import { Product } from "@prisma/client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";

interface Image {
  id: string;
  imageUrl: string;
  productId: string;
}

type ProductWithImages = Product & { images: Image[] };
interface DataCardProps {
  data: ProductWithImages;
}

const DataCard = ({ data }: DataCardProps) => {
  const [open, setOpen] = useState(false);
  const date = formatDate(data.createAt);
  let image: string | StaticImageData = defImage;
  if (data?.images[0]?.imageUrl != null) {
    image = data.images[0].imageUrl;
  }
  const deleteHandler = async (id: string) => {
    setOpen(false);
    const res = await deleteProductAction({ id });

    if (res == 0) {
      toast({
        title: "لايوجد شيئ ليحذف بالاساس",
      });
    } else if (res == -1) {
      toast({
        title: " حدث خطا ما",
      });
    } else {
      toast({
        title: " تم الحذف بنجاح",
      });
    }
  };
  return (
    <>
      <Alert
        open={open}
        setOpen={setOpen}
        confirm={deleteHandler}
        id={data.id}
      />

      <div className="flex items-center justify-between sm:justify-around text-center max-w-[500px] mx-auto">
        <div className="space-y-3">
          <div className="relative aspect-[12/9] min-w-[400px] overflow-hidden">
            <Image
              src={image}
              alt="photo"
              fill
              className="object-contain object-center"
            />
          </div>

          <h1 className="text-4xl">{data.name}</h1>
          <p className="text-2xl text-secondary-foreground/60">
            {data.description}
          </p>
          <p className="text-2xl text-primary">{data?.price} QAR</p>
          <p className="text-xl text-secondary-foreground/60">{date}</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href={"/dashboard/" + data.id} className="flex-1 p-0">
              <Button className="w-full py-5 flex gap-2">تعديل</Button>
            </Link>
            <Button
              onClick={() => setOpen(true)}
              className="w-full flex-1 py-5 flex gap-2 bg-red-600"
            >
              حذف
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCard;
