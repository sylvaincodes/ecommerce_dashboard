// import prismadb from '@/lib/prismadb';
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import Navbar from "./components/navbar";
import prismadb from "@/lib/prismadb";

 const HomeLayout = async  ({ children }: { children:React.ReactNode}) => {
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
  // if (!store) redirect("/");

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default HomeLayout;