import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Reveal, RevealSlideOnly } from "../utils/Reveal";
import TechBadge from "../components/TechBadge";
import Image from "next/image";

export default function ProjectTile(props) {
  const handleAppClick = () => {
    window.open(`${props.appUrl}`, "_blank");
  };
  const handleGithubClick = () => {
    window.open(`${props.gitHubUrl}`, "_blank");
  };

  return (
    <div
      onClick={handleAppClick}
      className="projectTile--container flex-column cursor-pointer gap-10 mb-8 pr-5 sm:pr-0 sm:flex sm:mb-12"
    >
      <div className="sm:w-1/3 pt-3">
        <RevealSlideOnly>
          <div className="bg-neutral-950 rounded-t-xl w-full h-[180px]">
            <Image
              src={props.imageUrl}
              alt={props.title}
              width={640}
              height={360}
              className="projectTile--appDemo rounded-t-lg w-fit duration-200 delay-100 align-center mb-2 sm:mb-0 sm:opacity-70"
            />
          </div>
        </RevealSlideOnly>
      </div>
      <div className="flex flex-col sm:w-2/3">
        <div className="flex items-center gap-4 sm:mb-3">
          <Reveal>
            <p className="projectTile--title py-2 text-lg duration-200 delay-100 font-semibold w-full">
              {props.title}
            </p>
          </Reveal>
          <div className="flex-grow h-[1px] bg-neutral-700" />
          <RevealSlideOnly>
            <FontAwesomeIcon
              onClick={handleGithubClick}
              icon={faGithub}
              className="cursor-pointer h-6 flex content-center hover:text-orange-600 transition-color duration-200 delay-100"
            />
          </RevealSlideOnly>
          <RevealSlideOnly>
            <FontAwesomeIcon
              onClick={handleAppClick}
              icon={faArrowUpRightFromSquare}
              className="cursor-pointer h-5 flex content-center hover:text-orange-600 transition-color duration-200 delay-100"
            />
          </RevealSlideOnly>
        </div>
        <Reveal>
          <p className="projectTile--desc duration-200 delay-100 text-sm text-neutral-500 sm:text-base">
            {props.description}
          </p>
        </Reveal>
        <Reveal>
          <TechBadge techList={props.techList} />
        </Reveal>
      </div>
    </div>
  );
}
