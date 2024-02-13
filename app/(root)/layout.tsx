import React from "react";
import { Navbar } from "./components/navbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (userId) {
    redirect("/home");
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
