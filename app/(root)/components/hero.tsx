import Buttonstyle from "@/components/ButtonStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className="py-20 md:py-40">
      <div className="container w-full">
        <div
          className="flex flex-col items-start md:items-center
        justify-center  gap-y-4 mb-10"
        >
          <h1
            className="text-3xl md:text-6xl md:text-center font-extrabold 
          :first-letter:capitalize text-gray-800  md:max-w-3xl"
          >
            Run multiple store from a single panel.
          </h1>
          <p className="text-gray-600 text-md md:text-xl md:text-center md:max-w-xl">
            Api Store is a sass to help customers to manage multiple store from
            a single dashboard. with api store setting up a multistore can be an
            amazing option for you
          </p>

          <Link href="/sign-up" className="w-fit my-10">
            <Buttonstyle text="join for free" />
          </Link>

          <div>
            <p className="text-gray-400">
              {" "}
              15 days trial - no credit card required
            </p>
          </div>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt="illustration"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
