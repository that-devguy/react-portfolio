import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTerminal } from "@fortawesome/free-solid-svg-icons";

export default function MyTech() {
  return (
    <div className="myTech--container">
      <p className="text-md font-semibold flex items-center mb-6">
        <FontAwesomeIcon
          icon={faTerminal}
          className="text-black bg-orange-600 mr-2 p-1 w-3 h-3 rounded-md"
        />
        Full-stack Technologies
      </p>
      <div className="flex flex-wrap mb-8 gap-2">
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">JavaScript</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">CSS</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">HTML</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">React</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Handlebars</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">NodeJS</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Express</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">MongoDB</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">MySQL</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">jQuery</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">REST</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">JSON</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Tailwind</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Bootstrap</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Git</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">GitHub</p>
      </div>
      <p className="text-md font-semibold flex items-center mb-6">
        <FontAwesomeIcon
          icon={faPalette}
          className="text-black bg-orange-600 mr-2 p-1 w-3 h-3 rounded-md"
        />
        Design Tools
      </p>
      <div className="flex flex-wrap mb-5 gap-2">
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Photoshop</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Illustrator</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Premiere Pro</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">After Effects</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Figma</p>
        <p className="text-sm bg-zinc-800 px-2 rounded-xl w-fit">Canva</p>
      </div>
    </div>
  );
}
