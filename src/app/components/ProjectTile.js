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
    <div onClick={handleAppClick} className="projectTile--container rounded-xl flex cursor-pointer gap-10 mb-12">
      <div className="w-1/3 pt-3">
        <RevealSlideOnly>
          <Image
            src={props.imageUrl}
            alt={props.title}
            width={640}
            height={360}
            className="projectTile--appDemo rounded-t-lg w-fit opacity-70 duration-200 delay-100"
          />
        </RevealSlideOnly>
      </div>
      <div className="flex flex-col w-2/3">
        <div className="flex items-center gap-4 mb-3">
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
          <p className="projectTile--desc duration-200 delay-100 text-md text-neutral-500">
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
