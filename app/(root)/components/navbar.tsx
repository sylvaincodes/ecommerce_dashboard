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

export const Navbar = () => {
  const router = useRouter();

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Create multi store",
      href: "#",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Create Product",
      href: "#",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Create categories",
      href: "#",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Create product",
      href: "#",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Upload Image",
      href: "#",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Build Api for front",
      href: "#",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex  items-center w-full">
            {/* logo  */}
            <div>
              <Link href="/" className="font-bold text-xl uppercase">
                api-store
              </Link>
            </div>

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
                    <Link href="/pricing" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
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
