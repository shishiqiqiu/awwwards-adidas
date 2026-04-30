import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import ViewCanvas from "@/components/ViewCanvas";

const mulish = Mulish({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "adidas",
  description:
    "Foot Locker and adidas Originals' latest collection breaks new ground.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mulish.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ViewCanvas />
        {children}
      </body>
    </html>
  );
}
