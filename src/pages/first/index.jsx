import Planet from '@/assets/images/svg/mars.svg';
import astronaut from '@/assets/images/svg/astronaut.svg';
import downArrow from '@/assets/images/svg/down.svg';
import { useState, useEffect } from 'react';
import './index.css';

const FirstScreen = ({ onNext }) => {
  //const [position, setPosition] = useState({ top: 0, left: 0 });
  const [showAnimation, setShowAnimation] = useState(true);

  const scrollToNextScreen = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
    setShowAnimation(false); // 클릭 시 애니메이션 중지
  };

  // useEffect(() => {
  //   const moveAstronaut = () => {
  //     const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
  //     const randomLeft = Math.floor(Math.random() * (window.innerWidth - 50));
  //     setPosition({
  //       top: randomTop,
  //       left: randomLeft,
  //     });
  //   };
  //   moveAstronaut();
  //   const interval = setInterval(moveAstronaut, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="first-screen-container">
      <div className="background" />

      <div className="text-container">
        <p>안녕하세요! 마스외전 입니다.</p>
        <h2>마스외전 6기를 찾고 있습니다.</h2>
      </div>
      <img src={Planet} alt="Mars" className="planet" />
      {/* <img
        src={astronaut}
        alt="astronaut"
        className="astronaut"
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      /> */}

      <img
        src={downArrow}
        alt="Down Arrow"
        className={`first_down-arrow ${!showAnimation ? 'hidden' : ''}`}
        onClick={scrollToNextScreen}
      />

      <footer className="footer">
        © 2024 Mars Sequel. All rights reserved.
      </footer>
    </div>
  );
};

export default FirstScreen;
