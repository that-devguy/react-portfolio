import SectionHeader from "../components/SectionHeader";
import ContactLinks from "../components/ContactLinks";

export default function Contact() {
  return (
    <section className="contact--container mx-auto max-w-4xl mt-20">
    <SectionHeader title="Contact" />
    <div className="contact--infoContainer flex col-2 gap-10">
      <div className="w-2/3 text-neutral-500">
        <p className="mb-5">
        Thank you for visiting my portfolio and exploring my work. I hope you
        found inspiration in the projects I&apos;ve shared. If you&apos;re looking for a
        dedicated front-end web developer, I would love
        to hear from you. Whether you have a specific project in mind or simply
        want to discuss potential opportunities, please don&apos;t hesitate to reach
        out. I&apos;m passionate about creating exceptional user experiences and
        bringing visions to life through design and technology. Let&apos;s connect
        and explore how we can collaborate to achieve outstanding results
        together.
        </p>
      </div>
      <div className="contact--linksContainer w-1/3">
        <ContactLinks />
      </div>
    </div>
  </section>
  );
}
