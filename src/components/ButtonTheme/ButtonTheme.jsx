import { useState, useEffect, useRef } from 'react';
import sun from '../../assets/img/icons/sun.svg';
import moon from '../../assets/img/icons/moon.svg';
import './buttonTheme.css';

function ButtonTheme() {
  const [theme, setTheme] = useState('light');
  const buttonRef = useRef(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      buttonRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      buttonRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [theme]);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <button ref={buttonRef} className="dark-mode-btn" onClick={toggleTheme}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default ButtonTheme;
