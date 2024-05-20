import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className={'text-end '}>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
