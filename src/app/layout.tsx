/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/modalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lustiyana",
  description: "Lustiyana Web Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" content="width=1024">
      <ModalProvider>
        <body className={inter.className}>{children}</body>
      </ModalProvider>
    </html>
  );
}
