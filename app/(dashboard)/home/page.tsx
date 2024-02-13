import { getStoreCount } from "@/actions/get-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { auth } from "@clerk/nextjs";


const page = async () => {
  
  const  { userId }  = auth();
  const getStore = await getStoreCount(userId);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Home page" description="This is your home page you can create a store or select one in the list" />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getStore}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
