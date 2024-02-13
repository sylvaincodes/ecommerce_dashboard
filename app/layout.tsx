import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";
import prismadb from "@/lib/prismadb";
import { ToastProvider } from "@/providers/toast-provider";
import { josephan } from "./fonts";

export const metadata: Metadata = {
  title: "Api-store - Multi vendor",
  description:
    "A platform with built-in NextJs, which helps programmers create eCommerce websites.",
  applicationName: "API-STORE",
  authors: ["sylvaincodes"],
  openGraph: {
    type: "website",
    url: "https://apistore-m6uz4upqg-sylvaincodes-projects.vercel.app/home",
    description:
      "A platform with built-in NextJs, which helps programmers create eCommerce websites",
    siteName: "API-STORE",
    images: [
      {
        url: "https://apistore-m6uz4upqg-sylvaincodes-projects.vercel.app/psd.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={josephan.className}>
          <ModalProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
