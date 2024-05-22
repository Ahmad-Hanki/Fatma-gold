"use client";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import MainHeader from "./MainHeader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const phoneNumber = "+97470770668";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=اريد الاستفسار عن شيئ`;
  const pathname = usePathname();
  return (
    <header className="relative">
      <MainHeader />
      <Container>
        <nav className="relative w-full h-[20vh] z-10 px-10">
          <div className="w-full flex items-center justify-between ">
            <div className="flex gap-6 items-center">
              <Logo />
              <p className="text-2xl">ذهب الفخامة</p>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:flex gap-7">
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
              <div className="sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Menu />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[250px] min-h-[40vh] bg-secondary/90 flex items-center flex-col py-10">
                    <DropdownMenuItem>
                      <Link
                        className={cn(
                          "text-2xl text-secondary-foreground/70",
                          pathname == "/"
                            ? "text-secondary-foreground font-bold"
                            : ""
                        )}
                        href={"/"}
                      >
                        الرئيسية
                      </Link>
                    </DropdownMenuItem>
                    <Separator className="my-6" />
                    <DropdownMenuItem>
                      <Link
                        className={cn(
                          "text-2xl text-secondary-foreground/70",
                          pathname.includes("/budget")
                            ? "text-secondary-foreground font-bold"
                            : ""
                        )}
                        href={"/budget"}
                      >
                        المعروضات
                      </Link>
                    </DropdownMenuItem>
                    <Separator className="my-6" />
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
                    <Separator className="my-6" />

                    <DropdownMenuItem>
                      <Link
                        className={cn("text-2xl text-secondary-foreground/70")}
                        href={whatsappLink}
                      >
                        تواصل معي
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
