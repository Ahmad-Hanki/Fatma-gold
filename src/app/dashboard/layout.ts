import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  noStore();
  const cookie = cookies();
  const data = cookie.get("fatima");
  if (!data || data.name != "fatima" || data.value != "hanki123") {
    redirect("/auth/login");
  }
  return children;
};

export default DashboardLayout;
