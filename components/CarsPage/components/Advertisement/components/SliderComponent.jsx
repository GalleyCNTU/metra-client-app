import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import classes from './SliderComponent.module.scss';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, marginRight: '40px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, marginLeft: '40px', zIndex: '999' }}
      onClick={onClick}
    />
  );
}

export const SliderComponent = ({ items, model, make }) => {
  const mediaWidthWindow = window.matchMedia('(max-width: 675px)').matches;
  const [popupIsActive, setPopupIsActive] = useState(false);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const settings = {
    draggable: popupIsActive ? true : false,
    ref: slider1Ref,
    asNavFor: nav2,
    infinite: false,
    dots: true,
    arrows: mediaWidthWindow ? false : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: `${classes.slick_dots}`,
    appendDots: (dots) => {
      return (
        <div>
          <ul>{dots}</ul>
        </div>
      );
    },
  };

  const navSettings = {
    ref: slider2Ref,
    asNavFor: nav1,
    infinite: false,
    arrows: false,

    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const handleOpenModal = () => {
    setPopupIsActive(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setPopupIsActive(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={classes.slick_carousel}>
      <div
        className={popupIsActive ? classes.popup : classes.slick_body}
        onClick={handleCloseModal}
      >
        <div
          className={popupIsActive ? classes.popup_box : classes.slick_box}
          onClick={(e) => e.stopPropagation()}
        >
          <Slider {...settings}>
            {[...items].map((item, index) => (
              <div
                className={
                  popupIsActive ? classes.popup_img : classes.item_slick_img
                }
                key={index}
                onClick={handleOpenModal}
              >
                <Image
                  src={item.url}
                  alt={`${make} ${model}`}
                  layout="fill"
                  className={
                    popupIsActive
                      ? classes.popup_img_png
                      : classes.item_slick_img_png
                  }
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={classes.slick_nav}>
        <Slider {...navSettings}>
          {[...items].map((item, index) => (
            <div key={index} className={classes.item_slick_nav_wrap}>
              <div className={classes.item_slick_nav_body}>
                <div className={classes.item_slick_nav_img}>
                  <Image
                    src={item.url}
                    alt={`${make} ${model}`}
                    layout="fill"
                    className={classes.item_slick_nav_img_png}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
