import downArrow from '@/assets/images/svg/down.svg';
import topArrow from '@/assets/images/svg/top.svg';
import LeftArrow from '@/assets/images/svg/left.svg';
import './index.css';
import What from '@/pages/what/what';
import Where from '@/pages/where/where';
import Who from '@/pages/who/who';
import { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

const pages = [
  ({ setIndex }) => (
    <animated.div className="page lightpink">
      <h2 className="page-title">마스외전에 놀러와</h2>
      <h3 className="page-subtitle" onClick={() => setIndex(1)}>
        우리는
      </h3>
      <h3 className="page-subtitle" onClick={() => setIndex(2)}>
        어디서
      </h3>
      <h3 className="page-subtitle" onClick={() => setIndex(3)}>
        무엇을 할까
      </h3>
    </animated.div>
  ),
  Who,
  Where,
  What,
];

const SecondScreen = () => {
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  const scrollToNextScreen = () => {
    window.scrollTo({
      top: window.innerHeight * 0,
      behavior: 'smooth',
    });
  };

  const scrollToUpScreen = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: 'smooth',
    });
  };

  return (
    <div className="second-screen-container">
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} setIndex={setIndex} />;
      })}
      {index === 0 ?
        <>
          <img
            src={topArrow}
            alt="Top Arrow"
            className="top-arrow"
            onClick={scrollToNextScreen}
          />
          <img
            src={downArrow}
            alt="Down Arrow"
            className="down-arrow"
            onClick={scrollToUpScreen}
          />
        </>
      : <img
          src={LeftArrow}
          alt="Left Arrow"
          className="left-arrow"
          onClick={() => setIndex(0)}
        />
      }
    </div>
  );
};

export default SecondScreen;
