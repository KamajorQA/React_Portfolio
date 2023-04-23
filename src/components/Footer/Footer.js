import telegram from '../../assets/img/icons/telegram.svg';
import gitHub from '../../assets/img/icons/gitHub.svg';
import linkedIn from '../../assets/img/icons/linkedIn.svg';

import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://t.me/KamajorQA" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Telegram Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/KamajorQA"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="GitHub Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!" target="_blank" rel="noreferrer">
                <img src={linkedIn} alt="LinkedIn Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>Made by Kamajor © {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
