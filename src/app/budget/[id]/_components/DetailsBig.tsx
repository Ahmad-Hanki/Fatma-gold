"use client";

import { Product } from "@prisma/client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import defImage from "@/assets/defaultImage.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface Image {
  id: string;
  imageUrl: string;
  productId: string;
  isPrimary: boolean;
}

type ProductWithImages = Product & { images: Image[] };
interface ProductDetailProps {
  data?: ProductWithImages;
}
const DetailsBig = ({ data }: ProductDetailProps) => {
  const [chosenPhoto, setChosenPhoto] = useState<StaticImport | string>(
    data?.images[0]?.imageUrl ?? defImage
  );
  const phoneNumber = "+97470770668"; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=لدي اهتمام في هذا المنتج: ${data?.name} - ${data?.description}`;

  return (
    <div className="flex flex-row-reverse justify-between ">
      <div className="aspect-[12/9] w-full  overflow-hidden relative rounded-2xl">
        <Image
          src={chosenPhoto}
          fill
          alt="photo"
          className="object-center object-contain"
        />
      </div>
      <div className="w-full h-full flex flex-col gap-7 text-center items-center justify-center">
        <h1 className="text-4xl ">{data?.name}</h1>
        <p className="text-2xl ">{data?.description}</p>
        {data?.price && (
          <p className="text-2xl text-primary">{data?.price} ريال قطري</p>
        )}
        <div
          className={cn(
            'flex w-full gap-5 justify-center'
           )}
        >
          {data?.images.map((img) => {
            return (
              <div
                onClick={() => {
                  setChosenPhoto(img.imageUrl);
                }}
                key={img.id}
                className="cursor-pointer aspect-[12/9] overflow-hidden relative w-full max-w-[200px] rounded-2xl"
              >
                <Image
                  src={img.imageUrl}
                  fill
                  alt="photo"
                  className="object-center object-contain"
                />
              </div>
            );
          })}
        </div>
        <Link href={whatsappLink} className="w-fit mx-auto">
            <Button className="w-full py-5">
                تواصل معنا عن طريق الواتساب
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsBig;
