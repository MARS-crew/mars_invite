import { useEffect, useState } from 'react';
import FirstScreen from '@/pages/first';
import SecondScreen from '@/pages/second';
import ThirdScreen from '@/pages/third';
import FourthScreen from '@/pages/fourth';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
    </div>
  );
};

export default Home;
