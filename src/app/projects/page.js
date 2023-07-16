"use client";
import React from "react";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import ProjectTile from "../components/ProjectTile";
import { Reveal } from "../utils/Reveal";
import data from "./data";

export default function ProjectsPage() {
  const projects = data.map((item) => {
    return <ProjectTile {...item} key={item.id} />;
  });
  return (
    <main>
      <Navbar />
      <section className="projects--container mx-auto mt-8 max-w-sm sm:max-w-xl sm:mt-20 md:max-w-3xl md:px-6 lg:max-w-4xl">
        <SectionHeader title="Projects" />
        <Reveal>
          <p className="mb-12 text-sm text-neutral-500 sm:text-base">
            I am excited to share with you a selection of my web development
            projects. My portfolio offers a glimpse into the range of projects I
            have worked on, each crafted with a focus on delivering exceptional
            user experiences and impactful visual aesthetics. Please feel free
            to explore and enjoy!
          </p>
        </Reveal>
        <div className="projects--tileContainer">{projects}</div>
      </section>
    </main>
  );
}
