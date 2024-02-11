// import prismadb from '@/lib/prismadb';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import Navbar from '@/components/navbar'
import connectDB from '@/lib/mongoose';
import Store from '@/mongoose/Store';

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {

  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in');
  }

  // prisma query
    // const store = await prismadb.store.findFirst({ 
    //   where: {
    //     id: params.storeId,
    //     userId,
    //   }
    //  });

  // Mongoose query 
  await connectDB()
  await Store.findById(params.storeId)
    .then(async (store: Object) => {
      if (!store)
      redirect('/');
    })
    .catch(() => {
    });

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};