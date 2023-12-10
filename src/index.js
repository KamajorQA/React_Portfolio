import React from 'react';
import ReactDOM from 'react-dom/client';
import { CursorContextProvider } from './context/CursorContext';
import App from './components/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorContextProvider>
    <App />
  </CursorContextProvider>
);
