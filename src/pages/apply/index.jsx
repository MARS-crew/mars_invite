import { useNavigate } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import bg from '@/assets/images/space_v.png';
import Section1 from '@/pages/section/section1';
import Section2 from '@/pages/section/section2';
import Section3 from '@/pages/section/section3';
import Section4 from '@/pages/section/section4';
import Section5 from '@/pages/section/section5';
import Section6 from '@/pages/section/section6';
import Section7 from '@/pages/section/section7';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import { db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';

const Container = styled.div`
  width: 100%;
  height: 700vh; /* 화면 높이의 6배 */
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'SejongGeulggot', sans-serif;
`;

const Logo = styled.img`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50px;
  color: #000;
  z-index: 3;
`;

const BackButton = styled.div`
  position: fixed;
  width: 130px;
  height: 50px;
  top: 1%;
  right: 0;
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
`;

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${bg}) center/cover no-repeat;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 15%;
  width: 300px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  text-align: center;
`;

const NavButton = styled.button`
  margin: 0 5px;
  border-radius: 20px;
  padding: 10px 10px;
  background-color: ${(props) => (props.active ? 'yellow' : 'white')};
  cursor: pointer;
`;

const Apply = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    generation: '',
    field: [],
    introduction: '',
    motivation: '',
    link: '',
  });

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleApplyClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, left: 0 });
  };

  const scrollToSection = (sectionIndex) => {
    if (sectionRefs[sectionIndex - 1].current) {
      sectionRefs[sectionIndex - 1].current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setCurrentSection(sectionIndex);
  };

  const handleInputChange = (section, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const saveFormData = async (formData) => {
    const { name, contact, generation, field, introduction, motivation, link } =
      formData;
    try {
      // 문서 ID를 name + id으로 지정하여 저장
      await setDoc(doc(db, '6th', name + Date.now()), {
        name,
        contact,
        generation,
        field,
        introduction,
        motivation,
        link,
      });

      alert('마스외전 5기 모집 지원에 성공했습니다!');
      window.location.href = '../index.html';
    } catch (error) {
      console.log('ERROR : ', error);
      alert('오류가 발생하였습니다. 관리자에게 문의해주세요.');
    }
  };

  const handleSubmit = async () => {
    console.log('Form Data:', formData);

    // 파이어 베이스 사용해서 formdata 저장하기
    try {
      await saveFormData(formData);
      console.log('Data saved to Firestore');
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  };

  const handleNext = (currentIndex) => {
    if (currentIndex < sectionRefs.length - 1) {
      scrollToSection(currentIndex + 2);
    }
  };

  return (
    <Container className="apply-container">
      <Logo src={logo} alt="Logo" />
      <BackButton onClick={handleApplyClick}>돌아가기</BackButton>
      <Navigation>
        {[1, 2, 3, 4, 5, 6, 7].map((section) => (
          <NavButton
            key={section}
            onClick={() => scrollToSection(section)}
            active={currentSection === section}
          />
        ))}
      </Navigation>
      {[1, 2, 3, 4, 5, 6, 7].map((section, index) => (
        <Section key={section} ref={sectionRefs[index]}>
          {index === 0 && (
            <Section1
              onNext={() => handleNext(index)}
              onChange={(value) => handleInputChange('name', value)}
            />
          )}
          {index === 1 && (
            <Section2
              onNext={() => handleNext(index)}
              onChange={(value) => handleInputChange('contact', value)}
            />
          )}
          {index === 2 && (
            <Section3
              onNext={() => handleNext(index)}
              onChange={(value) => handleInputChange('generation', value)}
            />
          )}
          {index === 3 && (
            <Section4
              onNext={() => handleNext(index)}
              onChange={(value) => handleInputChange('field', value)}
            />
          )}
          {index === 4 && (
            <Section5
              onNext={() => handleNext(index)}
              onChange={(value) => handleInputChange('introduction', value)}
            />
          )}
          {index === 5 && (
            <Section6
              onNext={() => handleNext(index)}
              onChange={(value) => handleInputChange('motivation', value)}
            />
          )}

          {index === 6 && (
            <Section7
              onNext={handleSubmit}
              onChange={(value) => handleInputChange('link', value)}
            />
          )}
        </Section>
      ))}
    </Container>
  );
};

export default Apply;
