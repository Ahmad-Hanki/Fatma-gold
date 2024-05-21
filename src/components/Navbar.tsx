"use client";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import MainHeader from "./MainHeader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="relative">
      <MainHeader />
      <Container>
        <nav className="relative w-full h-[20vh] z-10 px-10">
          <div className="w-full flex items-center justify-between ">
            <div className="flex gap-6 items-center">
              <Logo />
              <p className="text-2xl">ذهب فاطمة</p>
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
                    ? "text-secondary-foreground font-bold" : ""
                  )}
                >
                  المعروضات
                </Link>
                <Link
                  href={"/dashboard"}
                  className={cn(
                    "text-2xl text-secondary-foreground/70",
                    pathname == "/dashboard"
                      ? "text-secondary-foreground "
                      : ""
                  )}
                >
                  تسجيل الدخول
                </Link>
              </div>
              <div className="sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Menu />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[250px] min-h-[40vh] bg-secondary/90 flex items-center flex-col pt-20">
                    <DropdownMenuItem>
                      <Link
                        className={cn(
                          "text-2xl text-secondary-foreground/70",
                          pathname == "/" ? "text-secondary-foreground font-bold" : ""
                        )}
                        href={"/"}
                      >
                        الرئيسية
                      </Link>
                    </DropdownMenuItem>
                    
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
