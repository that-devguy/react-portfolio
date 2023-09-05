"use client";
import Link from "next/link";
import React from "react";
import ProjectsButton from "./components/ProjectsButton";
import { Reveal, RevealSlideOnly } from "./utils/Reveal";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../assets/fonts/headerFont.woff2",
  display: "fallback",
});

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <section className="hero--container flex flex-col mx-auto mt-[-6rem] justify-center items-center flex-grow max-w-sm sm:max-w-lg md:gap-2 md:max-w-lg lg:max-w-2xl">
        <RevealSlideOnly>
          <div className="flex gap-10 mb-8">
            <Link
              href="/about"
              className="cursor-pointer h-5 flex items-center text-neutral-500 underline hover:text-neutral-200 transition-color duration-200 delay-100"
            >
              About me
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer h-5 flex items-center text-neutral-500 underline hover:text-neutral-200 transition-color duration-200 delay-100"
            >
              Contact me
            </Link>
          </div>
        </RevealSlideOnly>
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
            Hi, my name is Zach Mutch, I&apos;m a design-driven Full-stack Web
            Developer with a passion for visually appealing and user-friendly
            web applications.
          </h3>
        </Reveal>
        <Reveal>
          <div className="flex items-center justify-center px-14 h-14">
            <ProjectsButton />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
