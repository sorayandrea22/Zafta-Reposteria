"use client";

import { useUIStore } from "@/store/ui/ui.store";
import { Navigation } from "@/utils";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

export const Hamburguer = () => {
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-85"></div>
      <nav className=" relative fixed top-0 right-0 w-64 h-screen bg-burgundy text-ivory shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <IoCloseOutline
          onClick={() => {
            closeSideMenu();
          }}
          size={30}
          className="absolute top-2 right-0"
        />
        <div className="mt-10">
          {Navigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="block p-4 hover:bg-burgundy-light"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
