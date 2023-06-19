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
    <div className="socials--container flex gap-4 text-neutral-500">
      <FontAwesomeIcon
        icon={faLinkedinIn}
        className="cursor-pointer h-5 flex content-center hover:text-orange-500 transition-color duration-200 delay-100"
        onClick={handleLinkedInClick}
      />
      <FontAwesomeIcon
        icon={faGithub}
        className="cursor-pointer h-5 flex content-center hover:text-orange-500 transition-color duration-200 delay-100"
        onClick={handleGithubClick}
      />
    </div>
  );
}
