import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Reveal } from "../utils/Reveal";
import TechBadge from "../components/TechBadge";

export default function ProjectTile(props) {
  return (
    <div className="projectTile--container flex cursor-pointer gap-10 mb-12">
      <div className="w-1/3">img</div>
      <div className="flex flex-col w-2/3">
        <div className="flex items-center gap-4 mb-3">
          <Reveal>
            <p className="projectTile--title py-2 text-lg font-semibold w-full">
              {props.title}
            </p>
          </Reveal>
          <div className="flex-grow h-[1px] bg-neutral-700" />
          <FontAwesomeIcon
            icon={faGithub}
            className="cursor-pointer h-6 flex content-center hover:text-orange-600 transition-color duration-200 delay-100"
          />
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="cursor-pointer h-5 flex content-center hover:text-orange-600 transition-color duration-200 delay-100"
          />
        </div>
        <Reveal>
          <p className="projectTile--desc text-md text-neutral-500">
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
