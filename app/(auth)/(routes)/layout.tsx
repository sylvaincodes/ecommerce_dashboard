import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="flex items-center justify-center my-auto pt-20">
  {children}
  </div>;
};

export default AuthLayout;
