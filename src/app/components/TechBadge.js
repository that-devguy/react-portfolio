export default function TechBadge(props) {
  const techItems = props.techList.map((item, index) => (
    <p key={index} className="text-sm bg-zinc-800 px-2 rounded-xl">
      {item}
    </p>
  ));

  return <div className="flex flex-wrap my-4 gap-2">{techItems}</div>;
}
