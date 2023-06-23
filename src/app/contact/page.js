"use client";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import ContactLinks from "../components/ContactLinks";
import { Reveal } from "../utils/Reveal";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="contact--container mx-auto max-w-4xl mt-20">
        <SectionHeader title="Contact me" />
        <div className="contact--infoContainer flex col-2 gap-10">
          <div className="w-2/3 text-neutral-500">
            <Reveal>
              <p className="mb-5">
                Thank you for visiting my portfolio and exploring my work. I
                hope you found inspiration in the projects I&apos;ve shared. If
                you&apos;re looking for a dedicated front-end web developer, I
                would love to hear from you. Whether you have a specific project
                in mind or simply want to discuss potential opportunities,
                please don&apos;t hesitate to reach out. I&apos;m passionate
                about creating exceptional user experiences and bringing visions
                to life through design and technology.
              </p>
            </Reveal>
            <Reveal>
              <p className="flex items-center gap-2 text-lg text-orange-600">
                Let&apos;s connect and explore how we can collaborate to achieve
                outstanding results together.
              </p>
            </Reveal>
          </div>
          <div className="contact--linksContainer w-1/3">
            <Reveal>
              <ContactLinks />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
