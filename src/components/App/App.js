import telegram from '../../assets/img/icons/telegram.svg';
import gitHub from '../../assets/img/icons/gitHub.svg';
import linkedIn from '../../assets/img/icons/linkedIn.svg';

import './App.css';
import Navigation from '../Navigaton/Navigation';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
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
