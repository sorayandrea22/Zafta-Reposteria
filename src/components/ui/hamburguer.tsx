"use client";

import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/ui/ui.store";
import { Navigation } from "@/utils";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

export const Hamburguer = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <>
      {isSideMenuOpen && (
        <div
          className="
        fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-40
        "
        ></div>
      )}

      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10  backdrop-blur-xs"
          onClick={() => closeSideMenu()}
        ></div>
      )}

      <nav
        className={cn(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          { "translate-x-full": !isSideMenuOpen },
        )}
      >
        <IoCloseOutline
          onClick={() => {
            closeSideMenu();
          }}
          size={30}
          className="absolute top-2 right-0"
        />
        <div>
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
