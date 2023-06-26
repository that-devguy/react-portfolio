"use client";
import Link from "next/link";
import Socials from "./Socials";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

const myFont = localFont({
  src: "../../assets/fonts/headerFont.woff2",
  display: "fallback",
});

export default function Navbar() {
  const currentRoute = usePathname();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar--container h-10 bg-zinc-950/90 backdrop-blur-sm z-10 flex items-center justify-between gap-5 max-w-7xl m-auto py-12 px-0 sticky top-0">
      <div className="navbar--menuButton flex z-10 sm:hidden">
        <FontAwesomeIcon
          icon={nav ? faXmark : faEllipsisVertical}
          className="text-neutral-500 w-5 h-5"
          onClick={handleNav}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "navbar--mobileMenu absolute bg-zinc-950/90 backdrop-blur-sm top-0 left-0 right-0 bottom-0 flex flex-grow flex-col gap-5 justify-start items-left w-1/2 h-screen ease-in duration-300 pt-24 sm:hidden"
            : "navbar--mobileMenu absolute bg-zinc-950/90 backdrop-blur-sm top-0 left-[-100%] right-0 bottom-0 flex flex-grow flex-col gap-5 justify-start items-left w-1/2 h-screen ease-in duration-300 pt-24 sm:hidden"
        }
      >
        <Link
          href="/"
          className={`cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100 ${
            currentRoute === "/" ? "text-orange-500 hover:text-orange-500" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100 ${
            currentRoute === "/about"
              ? "text-orange-500 hover:text-orange-500"
              : ""
          }`}
        >
          About me
        </Link>
        <Link
          href="/projects"
          className={`cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100 ${
            currentRoute === "/projects"
              ? "text-orange-500 hover:text-orange-500"
              : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100 ${
            currentRoute === "/contact"
              ? "text-orange-500 hover:text-orange-500"
              : ""
          }`}
        >
          Contact
        </Link>
        <a
          href="/zachmutch-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          Resume
        </a>
      </div>

      {/* Default Menu */}
      <Link href="/" className="text-3xl hidden sm:flex" style={myFont.style}>
        that_<span className="text-orange-600">dev</span>guy
      </Link>
      <div className="hidden sm:flex gap-5 pr-5 border-r border-neutral-700 text-neutral-500 ml-auto font-semibold">
        <Link
          href="/about"
          className={`cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100 ${
            currentRoute === "/about"
              ? "text-orange-500 hover:text-orange-500"
              : ""
          }`}
        >
          About me
        </Link>
        <Link
          href="/projects"
          className={`cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100 ${
            currentRoute === "/projects"
              ? "text-orange-500 hover:text-orange-500"
              : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100 ${
            currentRoute === "/contact"
              ? "text-orange-500 hover:text-orange-500"
              : ""
          }`}
        >
          Contact
        </Link>
        <a
          href="/zachmutch-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          Resume
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Socials />
        <Link href="/" className="flex sm:hidden" style={myFont.style}>
          <Image
            src="/images/devguy-logo.png"
            alt="devguy-logo"
            width={30}
            height={30}
            className="navbar--mobileLogo w-fit"
          />
        </Link>
      </div>
    </nav>
  );
}
