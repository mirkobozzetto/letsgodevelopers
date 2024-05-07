import type { Metadata } from "next";
import clsx from 'clsx';

import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";

import Navbar from "./components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-green-400')}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
