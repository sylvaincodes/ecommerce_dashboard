import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";


export const getStoreCount = async () => {
    const { userId } = auth();
  const stockCount = await prismadb.store.count({
    where: {
      userId
    }
  });

  return stockCount;
};