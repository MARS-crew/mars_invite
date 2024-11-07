/* eslint-disable react/prop-types */
import { useState } from 'react';
import { animated } from '@react-spring/web';
import styled from 'styled-components';
import Planet from '@/assets/images/svg/mars.svg';
const Container = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/path/to/your/background-image.png') no-repeat center/cover;
`;

const StyledText = styled.p`
  position: absolute;
  font-size: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const ProfessorText = styled(StyledText)`
  top: 10%;
  left: 10%;
  font-size: 5vh;
`;

const MemberText = styled(StyledText)`
  top: 30%;
  left: 60%;
  font-size: 5vh;
`;

const MasterText = styled(StyledText)`
  top: 50%;
  left: 20%;
  font-size: 5vh;
`;

const SideMemberText = styled(StyledText)`
  top: 70%;
  left: 60%;
  font-size: 5vh;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vh;
  background-color: rgba(128, 128, 128, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalText = styled.div`
  font-size: 20px;
  color: white;
  margin-top: 20px;
  padding: 2vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: 0;
  background-color: transparent;
  font-size: 18px;
`;
const Mars = styled.img`
  position: fixed;
  top: 30%;
  left: 25%;
  width: 200px;
  animation: rotate 120s linear infinite;
`;
const Who = ({ style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container style={style}>
      <Mars src={Planet} alt="Mars" className="planet" />
      <ProfessorText onClick={() => handleOpenModal('교수님')}>
        교수님
      </ProfessorText>
      <MemberText onClick={() => handleOpenModal('멤버')}>멤버</MemberText>
      <MasterText onClick={() => handleOpenModal('마스터')}>마스터</MasterText>
      <SideMemberText onClick={() => handleOpenModal('깍두기')}>
        깍두기
      </SideMemberText>

      {isModalOpen && (
        <>
          <Overlay onClick={handleCloseModal} />
          <Modal>
            <ModalText>
              {modalContent === '교수님' && (
                <>
                  우리 학교의 컴퓨터정보공학과 교수님 두 분! 개발 경력
                  10년차이신 이선혜 교수님과 오영재 교수님, 최주호 교수님께서
                  마스외전을 가이딩해주십니다. 마스외전 멤버들이 좋은 개발자로
                  성장할 수 있도록 다양한 활동을 제공해주시고 있습니다.
                </>
              )}
              {modalContent === '멤버' && (
                <>
                  동양미래대학교 컴퓨터공학부 졸업생들로 구성된 1기, 2기, 3기,
                  4기,5기 멤버들이 있습니다. 현 기수는 다양한 활동을 하는
                  마스외전의 정식 멤버들입니다. 졸업 후에도 현직 개발자로
                  활동하며 소통과 활동을 통해 돈독한 유대감을 쌓으며 함께 성장해
                  나가는 중입니다.
                </>
              )}
              {modalContent === '마스터' && (
                <>
                  마스외전에는 개발, 기획, 영상으로 나뉜 다양한 실무종사자
                  분들이 마스터로 계십니다. 풍부한 경험과 전문성으로 많은 조언을
                  해주시며 프로젝트에 도움을 주시는 분들이죠. 프로젝트 외에도
                  교우관계, 진로고민 등 늘 저희의 목소리에 귀 기울여
                  들어주십니다.
                </>
              )}
              {modalContent === '깍두기' && (
                <>
                  마스외전에서는 깍두기라고 부르는 사이드멤버들입니다. 아직
                  학교에 재학중인 학생들이 바로 깍두기이며 정식멤버들의
                  프로젝트를 직접 지켜보고, 직접 혹은 간접적으로 참여할 수 있는
                  기회를 얻을 수 있습니다. 프로젝트, 다양한 외부강의 등의 활동을
                  경험하며 자신의 진로와 하고싶은 분야에 대해 알아가는 중요한
                  경험을 할 수 있습니다.
                </>
              )}
            </ModalText>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Who;
