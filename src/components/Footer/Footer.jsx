import { useContext } from 'react';
import { CursorContext } from '../../context/CursorContext';

import { ReactComponent as Telegram } from '../../assets/img/icons/telegram.svg';
import { ReactComponent as GitHub } from '../../assets/img/icons/gitHub.svg';
import { ReactComponent as LinkedIn } from '../../assets/img/icons/linkedIn.svg';

import './footer.css';

function Footer() {
  const { switchCursorBallHidden } = useContext(CursorContext);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li
              className="social__item"
              onPointerEnter={switchCursorBallHidden}
              onPointerLeave={switchCursorBallHidden}
            >
              <a href="https://t.me/KamajorQA" target="_blank" rel="noreferrer">
                <Telegram />
              </a>
            </li>
            <li
              className="social__item"
              onPointerEnter={switchCursorBallHidden}
              onPointerLeave={switchCursorBallHidden}
            >
              <a
                href="https://github.com/KamajorQA"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
            </li>
            <li
              className="social__item"
              onPointerEnter={switchCursorBallHidden}
              onPointerLeave={switchCursorBallHidden}
            >
              <a
                href="https://www.linkedin.com/in/KamajorQA"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>Made by Kamajor © 2022–{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
