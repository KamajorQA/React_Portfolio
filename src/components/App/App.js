import sun from '../../assets/img/icons/sun.svg';
import moon from '../../assets/img/icons/moon.svg';
import telegram from '../../assets/img/icons/telegram.svg';
import gitHub from '../../assets/img/icons/gitHub.svg';
import linkedIn from '../../assets/img/icons/linkedIn.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <a href="./index.html" className="logo">
              <strong>Kamajor's</strong> portfolio
            </a>

            <button className="dark-mode-btn">
              <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
              <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <a
                  href="./index.html"
                  className="nav-list__link nav-list__link--active"
                >
                  Home
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./projects.html" className="nav-list__link">
                  Projects
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./contacts.html" className="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
          <a href="#!" className="btn">
            Download CV
          </a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">I'm currently using</h2>
              <p>
                JavaScript, ReactJS, React Router, HTML, CSS & module CSS, NPM,
                AntDesign
              </p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a
                  href="https://t.me/KamajorQA"
                  target="_blank"
                  rel="noreferrer"
                >
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
    </div>
  );
}

export default App;
