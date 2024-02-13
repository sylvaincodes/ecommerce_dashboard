import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";
import prismadb from "@/lib/prismadb";
import { ToastProvider } from "@/providers/toast-provider";
import { josephan } from "./fonts";

export const metadata: Metadata = {
  title: "api-store - Multi vendor",
  description: "api store : Running multiple stores from a single dashboard. ",
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
