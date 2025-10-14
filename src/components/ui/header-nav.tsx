import { Navigation } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full p-4 bg-primary text-white text-lg flex items-center justify-around ">
      <div>
        <picture>
          <Image
            src="/img/logo.png"
            alt="Logo Zafta"
            width={100}
            height={100}
            unoptimized
          />
        </picture>
      </div>
      <nav className="flex items-center gap-4 ">
        {Navigation.map((NavItem) => (
          <li key={NavItem.name} className="list-none">
            <Link
              href={NavItem.path}
              className="hover:text-secondary cursor-pointer"
            >
              {NavItem.name}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
};
