import Link from "next/link";
import Socials from "../components/Socials";

export default function Navbar() {
  return (
    <nav className="navbar--container h-10 flex items-center gap-5 max-w-7xl m-auto py-8 px-5 sticky top-0">
      <Link href="/" className="text-2xl flex">
        that_<span className="text-orange-600">dev</span>guy
      </Link>
      <div className="flex gap-5 pr-5 border-r border-neutral-700 text-neutral-500 ml-auto font-semibold">
        <Link
          href="/about"
          className="cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          About me
        </Link>
        <Link
          href="/projects"
          className="cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer h-5 flex items-center hover:text-neutral-200 transition-color duration-200 delay-100"
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
