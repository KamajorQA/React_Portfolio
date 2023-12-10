import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ButtonTheme from '../ButtonTheme/ButtonTheme';
import { CursorContext } from '../../context/CursorContext';
import './navigation.css';

function Navigation() {
  const { switchCursorBallHidden } = useContext(CursorContext);
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link
            to="/"
            className="logo"
            onPointerEnter={switchCursorBallHidden}
            onPointerLeave={switchCursorBallHidden}
          >
            <strong>Kamajor's</strong> portfolio
          </Link>
          <ButtonTheme />
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className="nav-list__link"
                onPointerEnter={switchCursorBallHidden}
                onPointerLeave={switchCursorBallHidden}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className="nav-list__link"
                onPointerEnter={switchCursorBallHidden}
                onPointerLeave={switchCursorBallHidden}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className="nav-list__link"
                onPointerEnter={switchCursorBallHidden}
                onPointerLeave={switchCursorBallHidden}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
