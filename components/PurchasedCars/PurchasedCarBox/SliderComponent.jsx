import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './PurchasedCarBox.module.scss';
import Image from 'next/image';

const Slider = ({ items }) => {
  const [enable, setEnable] = useState(false);

  return (
    <div style={{ width: '350px', height: '220px' }}>
      <Carousel
        slide={false}
        interval={enable ? 1000 : null}
        pause={false}
        onMouseEnter={() => setEnable(true)}
        onMouseLeave={() => setEnable(false)}
        indicators={false}
        controls={false}
      >
        {[...items].map((item, index) => (
          <Carousel.Item key={index}>
            <Image
              className={classes.purchased_car_images}
              src={item.img}
              alt={item.placeholder}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
