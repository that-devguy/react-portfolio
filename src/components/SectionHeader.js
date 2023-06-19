import localFont from "next/font/local";
const myFont = localFont({
  src: "../assets/fonts/BDStreetSignSans-RaisedInktrap.otf",
});

export default function SectionHeader({ title }) {
  return (
    <section className="flex items-center w-full gap-5 mb-5">
      <h3 style={myFont.style} className="text-5xl min-w-fit pt-2">
        {title}
      </h3>
      <div className="w-full h-[1px] bg-orange-600" />
    </section>
  );
}
