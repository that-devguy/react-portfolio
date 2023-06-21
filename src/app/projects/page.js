"use client";
import React from "react";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import ProjectTile from "../components/ProjectTile";
import { Reveal } from "../utils/Reveal";
import data from "./data";

export default function AboutPage() {
  const projects = data.map((item) => {
    return <ProjectTile {...item} key={item.id} />;
  });
  return (
    <main>
      <Navbar />
      <section className="projects--container mx-auto max-w-4xl mt-20">
        <SectionHeader title="Projects" />
        <Reveal>
          <p className="mb-12 text-neutral-500">
            Thank you for visiting my projects page. Here, I am excited to share
            with you a selection of my web development and graphic design
            projects. You will find captivating websites, interactive web
            applications, digital marketing, and even video production that
            showcase my skills and creativity. My portfolio offers a glimpse
            into the range of projects I have worked on, each crafted with a
            focus on delivering exceptional user experiences and impactful
            visual aesthetics. Please feel free to explore and enjoy!
          </p>
        </Reveal>
        <div className="projects--tileContainer">{projects}</div>
      </section>
    </main>
  );
}
