import { Reveal } from "../components/Reveal";

export default function SectionHeader({ title }) {
  return (
    <section className="flex items-center w-full gap-5 mb-5">
      <div className="text-5xl min-w-fit">
        <Reveal>
          <h3 className="p-2">{title}</h3>
        </Reveal>
      </div>
      <div className="w-full h-[1px] bg-orange-600" />
    </section>
  );
}
