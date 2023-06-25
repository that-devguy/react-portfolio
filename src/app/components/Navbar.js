"use client";
import Link from "next/link";
import Socials from "./Socials";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const myFont = localFont({
  src: "../../assets/fonts/headerFont.woff2",
  display: "fallback",
});

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="navbar--container h-10 bg-zinc-950/90 backdrop-blur-sm z-10 flex items-center space-between gap-5 max-w-7xl m-auto py-12 px-5 sticky top-0">
      <div className="navbar--menuButton block z-10 sm:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-neutral-500 mr-2 p-1 w-5 h-5"
        />
      </div>
      <div className="navbar--mobileMenu absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen ease-in durantion-300 sm:hidden">
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

      <Link href="/" className="text-3xl flex" style={myFont.style}>
        that_<span className="text-orange-600">dev</span>guy
      </Link>
      <div className="flex gap-5 pr-5 border-r border-neutral-700 text-neutral-500 ml-auto font-semibold">
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

      <Socials />
    </nav>
  );
}
