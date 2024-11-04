/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useRef } from 'react'; // useRef를 추가

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px;
  font-size: 1rem;
  color: white;
  width: 100%;
  outline: none;
  &:focus {
    border-bottom: 3px solid #fff;
  }
`;

const Question = styled.div`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  margin-top: 20px;
  width: 60px;
  height: 35px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section1 = ({ onNext, onChange }) => {
  const inputRef = useRef(null); // inputRef 생성

  return (
    <Container>
      <Question>1. 이름을 남겨주세요.</Question>
      <StyledInput
        ref={inputRef} // ref를 StyledInput에 연결
        onChange={(e) => onChange(e.target.value)}
        onBlur={onNext} // 포커스가 해제될 때 onNext 호출
        placeholder="이름을 입력하세요"
      />
      <Button onClick={onNext}>다음</Button>
    </Container>
  );
};

export default Section1;
