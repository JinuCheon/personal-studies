import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import { Overlay, Global, Header, SlickWrapper, ImgWrapper, Indicator } from './styles';


// 전역으로 동작하는 스타일 적용 방법이다.
// 라이브러리 등을 커스터마이밍 할 일이 있다면 이런 방법도 있다.


const ImagesZoom = ({ images, onClose }) => {
const [currentSlide, setCurrentSlide] = useState(0);

  return(
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slideToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            {currentSlide + 1}
            {' '}
            /
            {images.length}
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  )
}

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ImagesZoom;
