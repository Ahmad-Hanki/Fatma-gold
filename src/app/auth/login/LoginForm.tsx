"use client";
import loginAction from "@/actions/loginAction";
import SubmitButton from "@/components/SubmitButton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const { toast } = useToast();

  const submitHandler = async (formData: FormData) => {
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    if (!username) {
      toast({
        title: "لا يوجد اسم مستخدم",
        description: "عليك ادخال جميع البيانات",
      });
      return;
    } else if (!password) {
      toast({
        title: "لا يوجد اسم كلمة مرور",
        description: "عليك ادخال جميع البيانات",
      });
      return;
    }

    const res = await loginAction({ username, password });

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
  };
  return (
    <div className=" w-full h-[70vh] grid place-content-center ">
      <Card className="p-10">
        <form action={submitHandler} className="w-full min-w-[200px] flex flex-col gap-5 ">
          <Input
            className=" py-10"
            placeholder="اسم المستخدم"
            required
            name="username"
          />
          <Input
            className="w-full py-10"
            placeholder="كلمة المرور"
            required
            name="password"
          />
          <SubmitButton submit="تسجيل الدخول" submitting=" الرجاء الانتظار" />
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
