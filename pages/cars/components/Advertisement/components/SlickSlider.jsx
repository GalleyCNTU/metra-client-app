import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import classes from '../Advertisement.module.scss';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const AsNavFor = ({ items, model, make }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const settings = {
    ref: slider1Ref,
    asNavFor: nav2,
    infinite: false,
  };

  const navSettings = {
    ref: slider2Ref,
    asNavFor: nav1,
    infinite: false,

    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {[...items].map((item, index) => (
          <div key={index} className={classes.slider_img}>
            <Image src={item.url} alt={`${make} ${model}`} layout="fill" />
          </div>
        ))}
      </Slider>

      <Slider {...navSettings}>
        {[...items].map((item, index) => (
          <div key={index} className={classes.slider_img_nav}>
            <Image src={item.url} alt={`${make} ${model}`} layout="fill" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
