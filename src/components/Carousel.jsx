import { useRef, useState } from 'react';
import Left from '@/assets/images/svg/left.svg';
import Right from '@/assets/images/svg/right.svg';
import './Carousel.css';

// 이미지 임포트
import image1 from '@/assets/images/list/1.png';
import image2 from '@/assets/images/list/2.png';
import image3 from '@/assets/images/list/3.png';
import image4 from '@/assets/images/list/4.png';
import image5 from '@/assets/images/list/5.png';
import image6 from '@/assets/images/list/6.png';
import image7 from '@/assets/images/list/7.png';
import image8 from '@/assets/images/list/8.png';
import image9 from '@/assets/images/list/9.png';
import image10 from '@/assets/images/list/10.png';
import image11 from '@/assets/images/list/11.png';
import image12 from '@/assets/images/list/12.png';
import image13 from '@/assets/images/list/13.png';
import image14 from '@/assets/images/list/14.png';
import image15 from '@/assets/images/list/15.png';

const slidesData = [
  {
    id: 1,
    image: image1,
    title: '2022년 상반기',
    description: '마스외전 3기 모집',
  },
  {
    id: 2,
    image: image2,
    title: '2022년 상반기',
    description: '상반기 총회',
  },
  {
    id: 3,
    image: image3,
    title: '2022년 상반기',
    description: '2기, 3기 프로젝트 리뷰',
  },
  {
    id: 4,
    image: image4,
    title: '2022년 상반기',
    description: '2기, 3기 프로필 촬영',
  },
  {
    id: 5,
    image: image5,
    title: '2022년 상반기',
    description: '마스외전 하계 MT',
  },
  {
    id: 6,
    image: image6,
    title: '2022년 하반기',
    description: '하반기 총회',
  },
  {
    id: 7,
    image: image7,
    title: '2022년 하반기',
    description: '마스외전 신년 특강',
  },
  {
    id: 8,
    image: image8,
    title: '2023년 상반기',
    description: '마스외전 대결 프로젝트',
  },
  {
    id: 9,
    image: image9,
    title: '2023년 상반기',
    description: '마스외전 4기 프로필 촬영',
  },
  {
    id: 10,
    image: image10,
    title: '2023년 상반기',
    description: '마스외전 하계 MT',
  },
  {
    id: 11,
    image: image11,
    title: '2023년 상반기',
    description: '언커버 프로젝트',
  },
  {
    id: 12,
    image: image12,
    title: '2023년 상반기',
    description: '마스외전 4기 지식 공유',
  },
  {
    id: 13,
    image: image13,
    title: '2023년 하반기',
    description: '마스외전 4기 버킷 프로젝트',
  },
  {
    id: 14,
    image: image14,
    title: '2023년 하반기',
    description: '놀면 뭐하니? 리액트 특강',
  },
  {
    id: 15,
    image: image15,
    title: '2023sus 하반기',
    description: '3기 워니토퍼 프로젝트',
  },
];

const Carousel = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const slides = containerRef.current.children;
    containerRef.current.prepend(slides[slides.length - 1]);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length,
    );
  };

  const handleNext = () => {
    const slides = containerRef.current.children;
    containerRef.current.appendChild(slides[0]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  return (
    <div className="carousel-container">
      <div className="buttons">
        <img src={Left} className="arrow prev" onClick={handlePrev} />
        <img src={Right} className="arrow next" onClick={handleNext} />
      </div>
      <div className="container" ref={containerRef}>
        {slidesData.map((slide, index) => (
          <div className="slide" key={slide.id}>
            <h3
              className="slide-title"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              {slide.title}
            </h3>

            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="slide-image"
              style={{ opacity: 1 }}
            />
            <div
              className="slide-description"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              {slide.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
