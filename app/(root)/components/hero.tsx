import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className="py-20 md:py-40">
      <div className="container w-full">
        <div
          className="flex flex-col items-start md:items-center
        justify-center  gap-y-4 "
        >
          <h1
            className="text-2xl md:text-6xl font-extrabold 
          :first-letter:capitalize text-gray-800"
          >
            Build your ecommerce store quickly.
          </h1>
          <p className="text-gray-600 text-md md:text-xl">
            API Store is a sass to help developers to focus on front
            developpement UI and acheive their goals quickly
          </p>

          <Link
            href="/sign-up"
            className="bg-yellow-300 rounded-full text-black flex justify-center items-center gap-4 capitalize px-10 py-4 mt-4 :hover:bg-black :hover:text-white"
          >
            Join for free
            <BsArrowRightCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};
