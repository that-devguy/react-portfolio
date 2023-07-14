import Link from "next/link";

export default function ProjectsButton() {
  return (
    <Link href="/projects">
      <button className="bg-neutral-100 hover:bg-orange-600 transition-color duration-200 delay-100 text-black font-semibold py-1 px-3 rounded">
        Browse My Work
      </button>
    </Link>
  );
}
