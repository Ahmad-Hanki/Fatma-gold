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
        <nav className="relative w-full h-[20vh] z-10">
          <div className="w-full flex items-center justify-between">
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
                    pathname == "/" ? "text-secondary-foreground " : ""
                  )}
                >
                  الرئيسية
                </Link>
                <Link
                  href={"/budget"}
                  className={cn(
                    "text-2xl text-secondary-foreground/70",
                    pathname == "/budget" ? "text-secondary-foreground " : ""
                  )}
                >
                  المعروضات
                </Link>
              </div>
              <div className="sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Menu />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link
                        className={cn(
                          "text-2xl text-secondary-foreground/70",
                          pathname == "/" ? "text-secondary-foreground " : ""
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
                          pathname == "/budget" ? "text-secondary-foreground " : ""
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
