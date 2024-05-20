import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ذهب فاطمة",
  description: "منصة لشراء الذهب المستعمل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={"text-end "}>
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
