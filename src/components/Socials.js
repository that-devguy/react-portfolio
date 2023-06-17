import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="socials--container flex gap-2">
      <FontAwesomeIcon icon={faLinkedinIn} className="h-5" onClick=""/>
      <FontAwesomeIcon icon={faGithub} className="h-5"/>
    </div>
  );
}