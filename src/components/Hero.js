"use client";
import React from "react";
import ContactButton from "../components/ContactButton";
import { Reveal } from "./Reveal";


export const Hero = () => {
  return (
    <section className="hero--container flex flex-col justify-center items-center">
      <Reveal>
        <h1 className="text-8xl flex mb-8">
          that_<span className="text-orange-600">dev</span>guy
        </h1>
      </Reveal>
      <Reveal>
        <h3 className="text-md max-w-xl text-center text-neutral-500 mb-5">
          Hi, my name is Zach Mutch, I&apos;m a design-driven Front-end Web
          Developer with a passion for visually appealing and user-friendly web
          applications.
        </h3>
      </Reveal>
      <Reveal>
        <ContactButton />
      </Reveal>
    </section>
  );
};
