import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/Bitwords logo.png";

import ServicesContent from "./Links/ServicesContent";
import HireContent from "./Links/HireContent";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-2xl">
          <img className=" h-[8vh]" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex items-center gap-14 space-x-4">
          <FlyoutLink href="#" FlyoutContent={ServicesContent}>
            Services
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={HireContent}>
            Hire
          </FlyoutLink>
          <a href="#link3" className="">
            Link 3
          </a>
          <a href="#link3" className="">
            Link 3
          </a>
          <a href="#link3" className="">
            Link 3
          </a>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md  hover:text-blue-700 hover:bg-transparent hover:outline-blue-700 hover:border-blue-700">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#link1" className="block text-gray-300 hover:text-white">
            Link 1
          </a>
          <a href="#link2" className="block text-gray-300 hover:text-white">
            Link 2
          </a>
          <a href="#link3" className="block text-gray-300 hover:text-white">
            Link 3
          </a>
          <button className="w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:text-blue-700 hover:bg-none">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative font-semibold">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopBar;
