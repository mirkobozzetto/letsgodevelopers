"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Logo from "../ui/Logo";

const SimpleFloatingNav = () => {
  return (
    <nav className="top-4 left-[50%] fixed flex items-center gap-6 border-[1px] bg-neutral-900/75 px-6 p-2 border-teal-700 rounded-lg w-fit text-sm text-teal-300 -translate-x-[50%]">
      <Link href="/">
        <Logo />
      </Link>
      <NavLink>Blog</NavLink>
      <NavLink>Contact</NavLink>
      <Nesletter />
    </nav>
  );
};

const NavLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="block hover:text-teal-50 overflow-hidden"
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 1 }}
        className="h-[20px]"
      >
        <span className="flex items-center p-1 h-[20px]">{children}</span>
        <span className="flex items-center p-1 h-[20px] text-teal-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const Nesletter = () => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap
          rounded-lg border-[1px]
        border-teal-300 px-4 py-1.5 font-medium
        text-teal-400 transition-all duration-300
        hover:text-teal-50 hover:border-teal-100 hover:bg-teal-800
          `}
    >
      Newsletter
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="h-36">
      <SimpleFloatingNav />
    </nav>
  );
};

export default Navbar;
