"use client";
import Link from "next/link";
import React from "react";
import { BsList } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import ListItem from "@/components/ui/listitem";
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Customize Multiple Stores",
      href: "#",
      description:
        "You can manage and customize all your stores simultaneously with a single admin panel.",
    },
    {
      title: "Reduced Operational Costs",
      href: "#",
      description:
        "Managing everything from one admin panel will significantly reduce your store’s operational costs.",
    },
    {
      title: "Easy Customer Management:",
      href: "#",
      description:
        " You can better track customer behaviors for different stores and get insights for future strategies.",
    },
    {
      title: "Keep Track of the Financials",
      href: "#",
      description:
        "Tracking your financial metrics becomes way easier than gathering data from different sources and getting it in one place.",
    },
    {
      title: "One-stop SEO Management",
      href: "#",
      description:
        "Building stores without optimizing them for search engines wastes time and effort.",
    },
    {
      title: "Build Api for front",
      href: "#",
      description: "it provides Api for any client service.",
    },
  ];

  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex  items-center w-full">
            {/* logo  */}

            <Link
              href="/"
              className="flex items-center font-bold text-xl uppercase"
            >
              <Image
                src="data:image/png;base64,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"
                width="60"
                height="60"
                alt="logo"
              />
              <span className="ms-3">api-store</span>
            </Link>

            {/* mobile icon  */}
            <div className="text-2xl md:hidden ms-auto">
              <BsList />
            </div>

            <div
              className="hidden md:flex md:items-center md:ms-20 md:space-x-16 
                  capitalize"
            >
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Documentation
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden md:flex">
            <Button onClick={() => router.push(`/sign-in`)}>Sign in</Button>
          </div>

          {/* Mobile menu  */}
        </div>
      </div>
    </header>
  );
};
