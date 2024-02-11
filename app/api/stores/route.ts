import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import store from '@/mongoose/Store';
import connectDB from "@/lib/mongoose"

// sice we use App router so we need to create a method ( POST , GET ...) for each function 
export  async function GET() {
    await connectDB()
    const stores = await store.find()
    return Response.json({ data: stores });
}

export async function POST(req: Request) {
    await connectDB()
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;
    if (!userId) {
            return new NextResponse("Unauthorized", { status: 403 });
          }
      
          if (!name) {
            return new NextResponse("Name is required", { status: 400 });
          }

    const insert = new store({
        name:name,
        userId:userId
    })
    await insert.save()
    return Response.json({ insert });
}