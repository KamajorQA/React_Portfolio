import { useContext } from 'react';
import { CursorContext } from '../../context/CursorContext';
import './header.css';

function Header() {
  const { switchCursorBallHidden } = useContext(CursorContext);

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Anton</em>
          </strong>
          <br />
          I'm a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://drive.google.com/file/d/11wXBveGYvw4aUTkmbniPVgzJWxu5xYzP/view"
          className="btn"
          target="_blank"
          rel="noreferrer"
          onPointerEnter={switchCursorBallHidden}
          onPointerLeave={switchCursorBallHidden}
        >
          Check my CV
        </a>
      </div>
    </header>
  );
}

export default Header;
