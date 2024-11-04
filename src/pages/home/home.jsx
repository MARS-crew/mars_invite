import FirstScreen from '@/pages/first';
import { useNavigate } from 'react-router-dom';
import SecondScreen from '@/pages/second';
import ThirdScreen from '@/pages/third';
import FourthScreen from '@/pages/fourth';
import logo from '@/assets/images/logo.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const handleApplyClick = () => {
    navigate('/apply');
  };
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      <p className="add" onClick={handleApplyClick}>
        지원하러 가기
      </p>
      <div className="vertical-line" />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
    </div>
  );
};

export default Home;
