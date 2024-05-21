"use client";

import { Product } from "@prisma/client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import defImage from "@/assets/defaultImage.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatter";
interface Image {
  id: string;
  imageUrl: string;
  productId: string;
  isPrimary: boolean;
}

type ProductWithImages = Product & { images: Image[] };
interface ProductDetailProps {
  data: ProductWithImages;
}
const DetailSmall = ({ data }: ProductDetailProps) => {
  const phoneNumber = "+97470770668";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=لدي اهتمام في هذا المنتج: ${data?.name} - ${data?.description}`;
  const date = formatDate(data.createAt);

  return (
    <div className="flex flex-col items-center justify-center gap-7 ">
      <h1 className="text-4xl ">{data?.name}</h1>
      <p className="text-2xl ">{data?.description}</p>
      {data?.price && (
        <p className="text-2xl text-primary">{data?.price} ريال قطري</p>
      )}
      <p className="text-2xl font-light">{date}</p>

      <div className={cn("flex w-full gap-5 justify-center flex-col")}>
        {data?.images && data.images.length > 1 ? (
          data.images.map((img) => {
            return (
              <div
                key={img.id}
                className="cursor-pointer aspect-[12/9] overflow-hidden relative w-full max-w-[400px] rounded-2xl"
              >
                <Image
                  src={img.imageUrl}
                  fill
                  alt="photo"
                  className="object-center object-contain"
                />
              </div>
            );
          })
        ) : (
          <div>
            <div className="cursor-pointer aspect-[12/9] overflow-hidden relative w-full max-w-[400px] rounded-2xl">
              <Image
                src={defImage}
                fill
                alt="photo"
                className="object-center object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <Link href={whatsappLink} className="w-fit mx-auto">
        <Button className="w-full py-5">تواصل معنا عن طريق الواتساب</Button>
      </Link>
    </div>
  );
};

export default DetailSmall;
