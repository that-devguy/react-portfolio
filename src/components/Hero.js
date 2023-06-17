import localFont from "next/font/local";
const myFont = localFont({
  src: "../assets/fonts/BDStreetSignSans-RaisedInktrap.otf",
});
import ContactButton from "../components/ContactButton";

export default function Hero() {
  return (
    <div className="hero--container flex flex-col h-screen justify-center items-center mt-[-70px]">
      <h1 className="text-8xl flex mb-8" style={myFont.style}>
        that_<span className="text-orange-600">dev</span>guy
      </h1>
      <h3 className="text-md max-w-xl text-center text-neutral-500 mb-5">
        Hi, my name is Zach Mutch, I&apos;m a design-driven Front-end Web
        Developer with a passion for visually appealing and user-friendly web
        applications.
      </h3>
      <ContactButton />
    </div>
  );
}
