import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

type Buttonstyle = {
  text: string;
};

export default function Buttonstyle({ text }: Buttonstyle) {
  return (
    <button
      name="button"
      className="shadow-lg w-80 h-20 tracking-widest inline-flex justify-center text-2xl items-center gap-x-4 p-4 text-black bg-white z-[1]
  uppercase shadow-sm transition-all
 relative hover:text-white hover:shadow-gray-500/50 before:absolute before:top-0 
 before:left-0 before:right-0 before:bottom-0 
 before:bg-black before:-z-10 before:duration-300 
 before:ease-out
 before:w-0 before:h-0 hover:before:w-full hover:before:h-2/4 
 hover:before:transition-all
 after:absolute after:bottom-0 after:left-0 after:right-0 
 after:h-0 after:w-0
 after:bg-black   hover:after:h-2/4 hover:after:w-full 
 after:duration-500 
 after:ease-out after:-z-10
 "
    >
      {text}
      <MdOutlineArrowRightAlt className="text-3xl" />
    </button>
  );
}
