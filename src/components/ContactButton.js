import Link from "next/link";

export default function ContactButton() {
  return (
    <Link href="/contact">
      <button className="bg-neutral-200 hover:bg-orange-600 transition-color duration-200 delay-100 text-black font-semibold py-1 px-3 rounded">
        Contact me
      </button>
    </Link>
  );
}
