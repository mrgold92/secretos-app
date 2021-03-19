import "./links.css";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const Links = () => {
  return (
    <div className="col-iz">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          <span>Mis secretos</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faFire} />
          <span>Inconfesables</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowCircleUp} />
          <span>Top 10</span>
        </li>
      </ul>
    </div>
  );
};

export default Links;
