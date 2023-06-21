import { Reveal } from "../utils/Reveal";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../assets/fonts/headerFont.woff2",
  display: "fallback"
});

export default function SectionHeader({ title }) {
  return (
    <section className="flex items-center w-full gap-5 mb-5">
      <div className="text-6xl min-w-fit">
        <Reveal>
          <h3 className="p-2" style={myFont.style}>{title}</h3>
        </Reveal>
      </div>
      <div className="w-full h-[1px] bg-orange-600" />
    </section>
  );
}
