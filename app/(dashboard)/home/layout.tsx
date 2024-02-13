// import prismadb from '@/lib/prismadb';
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import Navbar from "./components/navbar";
import prismadb from "@/lib/prismadb";

interface HomeProps {
  children: any;
}

const DashboardLayout = async ({ children }: HomeProps) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  // prisma query
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });
  if (!store) redirect("/");

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
