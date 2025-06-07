import type { Metadata } from "next";
import {} from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Annai Plastics",
  description: "experts in plastic injection and moulding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
