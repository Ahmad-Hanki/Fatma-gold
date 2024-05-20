"use client";
import addProductAction from "@/actions/addProductAction";
import SubmitButton from "./SubmitButton";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

const ProductForm = () => {
  const submitHandler = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const price = formData.get("price")?.toString();

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
    console.log(name, description);

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
  };
  return (
    <div className=" w-full h-[70vh] grid place-content-center">
      <Card className="p-10">
        <form
          action={submitHandler}
          className="w-full min-w-[400px] flex flex-col gap-5"
        >
          <Input className=" py-10" placeholder="الاسم" required name="name" />
          <Textarea
            className="w-full py-10"
            placeholder="الوصف"
            required
            name="description"
          />
          <Input
            className=" py-10"
            placeholder=" (اختياري) السعر"
            name="price"
          />
          <SubmitButton submit="يتم الاضافة" submitting=" الرجاء الانتظار" />
        </form>
      </Card>
    </div>
  );
};

export default ProductForm;
