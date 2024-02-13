import Link from "next/link";
import React from "react";

interface ListMenuProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const ListItem = ({ href, title, children }: ListMenuProps) => {
  return (
    <li>
      <Link href={href} className="flex flex-col space-y-4">
        <span className="font-bold text-lg text-gray-800">{title}</span>
        <span className="text-gray-500 text-sm">{children}</span>
      </Link>
    </li>
  );
};

export default ListItem;
