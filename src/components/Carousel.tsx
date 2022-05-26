import React from 'react';
import Slider from 'react-slick';
import data from '../assets/data.json';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './Carousel.styles.scss';

const Carousel = () => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const item = e.currentTarget as Element;
    item.classList.add('active');
  };
  const settings = {
    width: '100%',
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    centerMode: true,
    focusOnSelect: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div key={item.id} className='item' onClick={handleClick}>
              <img src={item.url} alt='nyc' />
              <div className='content'>{item.info}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
