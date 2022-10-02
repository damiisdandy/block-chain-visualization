import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Burger } from "./Burger/Burger";

const LINKS: LinkType[] = [
  {
    name: "Hash",
    href: "/hash",
  },
  {
    name: "Block",
    href: "/block",
  },
  {
    name: "Blockchain",
    href: "/blockchain",
  },
  {
    name: "Videos",
    href: "/videos",
  },
];

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen((state) => !state);

  const { pathname, push } = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex justify-between items-stretch h-14 bg-slate-800 w-screen px-4 md:px-11 lg:px-32">
      <h2 className="text-gray-300 h-14 flex items-center hover:text-white text-lg font-bold">
        <Link href="/">Block Chain</Link>
      </h2>
      <div className="items-stretch hidden md:flex">
        {LINKS.map((link) => (
          <p
            onClick={() => push(link.href)}
            key={link.href}
            className={`text-gray-300 cursor-pointer h-14 flex items-center px-5 hover:bg-slate-900 hover:text-white ${
              pathname === link.href && "bg-slate-900 text-white"
            }`}
          >
            <Link href={link.href}>{link.name}</Link>
          </p>
        ))}
      </div>
      <Burger isOpen={isOpen} toggleOpen={toggleOpen} />
      <div
        className={`w-screen ${
          isOpen ? "h-40 border-t-2" : "h-0 py-0 border-t-0"
        } flex flex-col gap-4 transition-all ease-in-out overflow-y-hidden top-14 border-t-2 border-gray-400 p-5 bg-slate-800 fixed z-50 left-0`}
      >
        {LINKS.map((link) => (
          <p
            onClick={() => {
              toggleOpen();
              push(link.href);
            }}
            key={link.href}
            className="text-gray-300"
          >
            <Link href={link.href}>{link.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};
