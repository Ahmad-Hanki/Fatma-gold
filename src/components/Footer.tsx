"use client";
import Link from "next/link";
import { Whatsapp } from "@/assets/Whatsapp";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Separator } from "./ui/separator";
import MainHeaderReverse from "./MainHeaderRevirce";

const Footer = () => {
  const pathname = usePathname();
  const phoneNumber = "+97470770668";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=اريد الاستفسار عن شيئ`;

  return (
    <footer className="relative">
      <MainHeaderReverse />

      <div className="w-full ">
        <div className="flex flex-col gap-7 justify-center items-center">
          <div className="flex-col sm:flex-row sm:justify-around items-center">
            <Link href={whatsappLink}>
              <Whatsapp className="h-8 w-8 " />
            </Link>
            <Logo />
          </div>
          <div className="flex flex-col gap-5 sm:flex-row justify-center items-center">
            <Link
              href={"/"}
              className={cn(
                "text-2xl text-secondary-foreground/70",
                pathname == "/" ? "text-secondary-foreground font-bold" : ""
              )}
            >
              الرئيسية
            </Link>
            <Link
              href={"/budget"}
              className={cn(
                "text-2xl text-secondary-foreground/70",
                pathname.includes("/budget")
                  ? "text-secondary-foreground font-bold"
                  : ""
              )}
            >
              المعروضات
            </Link>
            <Link
              href={"/dashboard"}
              className={cn(
                "text-2xl text-secondary-foreground/70",
                pathname.includes("/dashboard")
                  ? "text-secondary-foreground "
                  : ""
              )}
            >
              تسجيل الدخول
            </Link>
            <Link
              className={cn("text-2xl text-secondary-foreground/70")}
              href={whatsappLink}
            >
              تواصل معي
            </Link>
          </div>
          <Separator className="my-2" />
          <div>
            <h1 className="text-3xl md:text-7xl text-center">
              جميع الحقوق محفوظة © 2024
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
