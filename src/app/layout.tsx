import type { Metadata } from "next";
import clsx from 'clsx';

import { Raleway } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";

import Navbar from "./components/layout/Navbar";

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
})

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
      <body className={clsx(raleway.className, 'bg-teal-950')}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
