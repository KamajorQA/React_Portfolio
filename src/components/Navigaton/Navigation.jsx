import { Link, NavLink } from 'react-router-dom';
import ButtonTheme from '../ButtonTheme/ButtonTheme';
import './navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            <strong>Kamajor's</strong> portfolio
          </Link>
          <ButtonTheme />
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className="nav-list__link">
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className="nav-list__link">
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className="nav-list__link">
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
