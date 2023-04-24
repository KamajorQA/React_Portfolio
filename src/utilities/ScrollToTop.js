// вспомогательный хук React Router (из оф доки) прокручивающий страницу вверх при переходе по роутам.
// функция не может менять имя. Добавляется в виде компонента перед роутами.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
