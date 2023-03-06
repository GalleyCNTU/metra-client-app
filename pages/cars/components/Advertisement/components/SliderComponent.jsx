import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

import classes from './AdvertisementBox.module.scss';

const Slider = ({ items }) => {
  const [enable, setEnable] = useState(false);
  return (
    <div className={classes.slider_box}>
      <Carousel
        style={{width:'100%', height:'100%'}}
        slide={true}
        interval={null}
        pause={false}
        // onMouseEnter={() => setEnable(false)}
        // onMouseLeave={() => setEnable(false)}
        indicators={true}
        controls={true}
      >
        {[...items].map((item, index) => (
          <Carousel.Item key={index} className={classes.slider_img}>
            <Image src={item.url} alt={item.id} layout="fill"/>
            {/* <img src={item.url} alt={item.id} width={350} height={262} /> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
