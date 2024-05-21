"use client";
import addProductAction from "@/actions/addProductAction";
import SubmitButton from "./SubmitButton";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import { Product } from "@prisma/client";
import editProductAction from "@/actions/editProductAction";
import { useState } from "react";
import UploadButtonComponent from "./UploadButton";
import Image from "next/image";
import { redirect } from "next/navigation";
import { chosenImageProductAction } from "@/actions/chosenImage";

interface Image {
  id: string;
  imageUrl: string;
  productId: string;
}

type ProductWithImages = Product & { images: Image[] };
interface ProductFormProps {
  data?: ProductWithImages;
}

const ProductForm = ({ data }: ProductFormProps) => {
  const [uploadedImage, setUploadedImage] = useState<string[]>([]);

  const editChosenImage = async (id:string, productId:string) => {
    await chosenImageProductAction(id, productId);

    toast({
      title: "  تم اختيار هذه الصورة كصورة عرض بنجاح ",
    });
    
  }

  const submitHandler = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const price = formData.get("price")?.toString();
    console.log(data?.images);

    if (!name) {
      toast({
        title: "لا يوجد اسم ",
        description: "عليك ادخال  الاسم",
      });
      return;
    } else if (!description) {
      toast({
        title: "لا يوجد وصف",
        description: "عليك ادخال  الوصف",
      });
      return;
    }

    if (!data) {
      const res = await addProductAction({ name, description, price });
      if (res == 0) {
        toast({
          title: " ادخل البيانات كاملة  ",
          description: "عليك ادخال جميع البيانات",
        });
        return;
      } else if (res == -1) {
        toast({
          title: "  البيانات المدخلة غير صحيحة  ",
          description: " عليك ادخال البيانات بشكل صحيح",
        });
        return;
      }

      toast({
        title: "تمت اضافة االبيانات بنجاح",
      });
      redirect("/dashboard");
    } else {
      const res = await editProductAction({
        description,
        id: data.id,
        name,
        images: uploadedImage,
        price,
      });

      if (res == 0) {
        toast({
          title: " ادخل البيانات كاملة  ",
          description: "عليك ادخال جميع البيانات",
        });
        return;
      } else if (res == -1) {
        toast({
          title: "  البيانات المدخلة غير صحيحة  ",
          description: " عليك ادخال البيانات بشكل صحيح",
        });
        return;
      }

      toast({
        title: "تم تعدبل االبيانات بنجاح",
      });
      redirect("/dashboard");
    }
  };
  return (
    <div className=" w-full grid place-content-center">
      <Card className="p-10">
        <form
          action={submitHandler}
          className="w-full min-w-[400px] flex flex-col gap-5"
        >
          <Input
            className=" py-10"
            placeholder="الاسم"
            required
            name="name"
            defaultValue={data?.name}
          />
          <Textarea
            className="w-full py-10"
            placeholder="الوصف"
            required
            name="description"
            defaultValue={data?.description}
          />
          <Input
            className=" py-10"
            placeholder=" (اختياري) السعر"
            name="price"
            defaultValue={data?.price?.toString()}
          />

          {data && (
            <>
              <div>
                <UploadButtonComponent setImage={setUploadedImage} />
              </div>
            </>
          )}

          {uploadedImage && (
            <div className="flex flex-wrap gap-5 justify-center ">
              {uploadedImage.map((img, i) => (
                <div
                  className="w-96 aspect-square overflow-hidden relative"
                  key={i}
                >
                  <Image
                    src={img}
                    alt="photo"
                    className="object-contain object-center"
                    fill
                  />
                </div>
              ))}
            </div>
          )}

          {data?.images &&
            data.images.length >= 1 &&
            uploadedImage.length < 1 && (
              <div className="flex flex-wrap gap-5 justify-center">
                {data.images.map((img, i) => {
                  console.log(img.imageUrl);
                  return (
                    <div
                    onClick={() => {
                      editChosenImage(img.id, img.productId)
                    }}
                      className="w-52 aspect-square overflow-hidden relative"
                      key={i}
                    >
                      <Image
                        src={img?.imageUrl}
                        alt="photo"
                        className="object-contain object-center"
                        fill
                      />
                    </div>
                  );
                })}
              </div>
            )}
          <SubmitButton submit=" الاضافة" submitting=" الرجاء الانتظار" />
        </form>
      </Card>
    </div>
  );
};

export default ProductForm;
