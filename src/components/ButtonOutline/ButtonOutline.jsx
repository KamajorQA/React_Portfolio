import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './buttonOutline.css';

function ButtonOutline({ localIcon, faIcon, btnDesc, btnLink, inner }) {
  return inner ? (
    <Link to={btnLink} className="btn-outline">
      {faIcon && <FontAwesomeIcon icon={faIcon} alt={btnDesc} />}
      {btnDesc}
    </Link>
  ) : (
    <a href={btnLink} target="_blank" rel="noreferrer" className="btn-outline">
      {localIcon && <img src={localIcon} alt={btnDesc} />}
      {faIcon && <FontAwesomeIcon icon={faIcon} alt={btnDesc} />}
      {btnDesc}
    </a>
  );
}

export default ButtonOutline;
