import './header.css';

function Header() {
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
          href="https://drive.google.com/file/d/1o5iMEEENJ7yclMOm3rl1rxG0d7bLLDR9/view"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Check my CV
        </a>
      </div>
    </header>
  );
}

export default Header;
