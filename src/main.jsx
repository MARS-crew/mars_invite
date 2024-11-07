// src/main.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// ** Router Imports
import App from './App.jsx';

const Main = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const targetUrl = window.location.href;

    if (userAgent.match(/kakaotalk/i)) {
      window.location.href =
        'kakaotalk://web/openExternal?url=' + encodeURIComponent(targetUrl);
    }
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
