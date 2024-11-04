// src/main.jsx

import React, { useEffect } from 'react'; // React와 useEffect를 임포트
import ReactDOM from 'react-dom/client';

// ** Router Imports
import App from './App.jsx';

const Main = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const targetUrl = window.location.href;

    // KakaoTalk 사용자 에이전트 확인
    if (userAgent.match(/kakaotalk/i)) {
      // 외부 브라우저로 링크 열기
      window.location.href =
        'kakaotalk://web/openExternal?url=' + encodeURIComponent(targetUrl);
    }
  }, []);

  return <App />; // App 컴포넌트를 렌더링
};

// ReactDOM을 사용해 Main 컴포넌트를 렌더링
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
