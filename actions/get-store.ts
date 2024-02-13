import prismadb from "@/lib/prismadb";

export const getStoreCount = async (userId: string) => {
  const stockCount = await prismadb.store.count({
    where: {
      userId
    }
  });

  return stockCount;
};