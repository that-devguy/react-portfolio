"use client";
import React from "react";
import ContactButton from "./components/ContactButton";
import { Reveal } from "./utils/Reveal";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../assets/fonts/headerFont.woff2",
  display: "fallback",
});

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div><Navbar /></div>
      <section className="hero--container flex flex-col mx-auto justify-center items-center flex-grow max-w-sm sm:max-w-lg md:gap-2 md:max-w-lg lg:max-w-2xl">
        <Reveal>
          <h1
            className="text-6xl flex mb-6 pb-2 sm:text-8xl lg:text-9xl"
            style={myFont.style}
          >
            that_<span className="text-orange-600">dev</span>guy
          </h1>
        </Reveal>
        <Reveal>
          <h3 className="text-sm text-center text-neutral-500 mb-6 sm:text-base md:text-lg">
            Hi, my name is Zach Mutch, I&apos;m a design-driven Front-end Web
            Developer with a passion for visually appealing and user-friendly
            web applications.
          </h3>
        </Reveal>
        <Reveal>
          <div className="flex items-center justify-center px-14 h-14">
            <ContactButton />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
