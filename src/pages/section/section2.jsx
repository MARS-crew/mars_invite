/* eslint-disable react/prop-types */
import styled from 'styled-components';

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

const Section2 = ({ onNext, onChange }) => (
  <Container>
    <Question>2. 연락처를 남겨주세요.</Question>
    <StyledInput
      onChange={(e) => onChange(e.target.value)}
      placeholder="연락처를 남겨주세요"
    />
    <Button onClick={onNext}>다음</Button>
  </Container>
);

export default Section2;
