"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Logo from "../ui/Logo";

const SimpleFloatingNav = () => {
  return (
    <nav className="fixed left-[50%] top-4 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-teal-700 bg-neutral-900/75 p-2 text-sm px-6 text-teal-300">
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
    <a href="#" rel="nofollow" className="block overflow-hidden hover:text-teal-50">
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { duration: .1 },
        }}
        whileTap={{ scale: 1 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center p-1">{children}</span>
        <span className="flex h-[20px] items-center p-1 text-teal-50">
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
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px]
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
    <nav>
      <SimpleFloatingNav />
    </nav>
  );
};

export default Navbar;
