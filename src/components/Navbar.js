import Socials from "../components/Socials";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../assets/fonts/BDStreetSignSans-RaisedInktrap.otf",
});

export default function Navbar() {
  return (
    <nav className="navbar--container h-10 flex items-center gap-5 max-w-5xl m-auto py-8 px-5 sticky top-0 ">
      <a className="text-2xl flex" style={myFont.style}>
        that_<span className="text-orange-600">dev</span>guy
      </a>
      <div className="flex gap-5 pr-5 border-r border-neutral-700 text-neutral-500 ml-auto font-semibold">
        <a>Projects</a>
        <a>About me</a>
        <a>Contact</a>
        <a>Resume</a>
      </div>

      <Socials />
    </nav>
  );
}
