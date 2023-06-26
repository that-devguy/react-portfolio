"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/zachmutch/", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/that-devguy", "_blank");
  };
  return (
    <section className="socials--container flex gap-4 pr-3 text-neutral-500 border-r border-neutral-700 sm:pr-0 sm:border-none">
      <FontAwesomeIcon
        icon={faLinkedinIn}
        className="cursor-pointer h-5 flex content-center hover:text-orange-600 transition-color duration-200 delay-100"
        onClick={handleLinkedInClick}
      />
      <FontAwesomeIcon
        icon={faGithub}
        className="cursor-pointer h-5 flex content-center hover:text-orange-600 transition-color duration-200 delay-100"
        onClick={handleGithubClick}
      />
    </section>
  );
}
