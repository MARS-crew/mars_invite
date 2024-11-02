/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useRef } from 'react';

const StyledTextarea = styled.textarea`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px;
  font-size: 1rem;
  color: white;
  width: 80%;
  outline: none;
  resize: none;
  overflow-y: hidden;
  line-height: 1.5rem;
  max-height: calc(1.5rem * 10);
  &:focus {
    border-bottom: 3px solid #fff;
  }
`;

const Question = styled.div`
  font-size: 1.5rem;
  margin: 10%;
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

const Section7 = ({ onNext, onChange }) => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 1.5 * 10 * 16)}px`;
  };

  return (
    <Container>
      <Question>7. 자기를 드러낼 수 있는 링크를 적어주세요.</Question>
      <StyledTextarea
        ref={textareaRef}
        onChange={(e) => onChange(e.target.value)}
        placeholder="지원동기를 적어주세요"
        rows="1"
        onInput={handleInput}
      />
      <Button onClick={onNext}>제출</Button>
    </Container>
  );
};

export default Section7;
