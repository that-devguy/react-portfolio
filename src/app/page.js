"use client";
import React from "react";
import ContactButton from "./components/ContactButton";
import { Reveal } from "./utils/Reveal";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../assets/fonts/headerFont.woff2",
  display: "fallback"
});

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <section className="hero--container flex flex-col gap-2 justify-center items-center flex-grow">
        <Reveal>
          <h1 className="text-9xl flex mb-6 pb-2" style={myFont.style}>
            that_<span className="text-orange-600">dev</span>guy
          </h1>
        </Reveal>
        <Reveal>
          <h3 className="text-lg max-w-2xl text-center text-neutral-500 mb-6">
            Hi, my name is Zach Mutch, I&apos;m a design-driven Front-end Web
            Developer with a passion for visually appealing and user-friendly
            web applications.
          </h3>
        </Reveal>
        <Reveal>
          <div className="flex items-center px-14 h-14">
            <ContactButton />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
