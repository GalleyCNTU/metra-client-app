import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Slider = ({ items }) => {
  const [enable, setEnable] = useState(false);
  return (
    <div style={{ width: '450px', height: '320px'}}>
      <Carousel
        slide={true}
        interval={enable ? 1000 : null}
        pause={false}
        onMouseEnter={() => setEnable(false)}
        onMouseLeave={() => setEnable(false)}
        indicators={true}
        controls={true}
      >
        {[...items].map((item, index) => (
          <Carousel.Item key={index}>
            <Image src={item.url} alt={item.id} width={450} height={320} />
            {/* <img src={item.url} alt={item.id} width={350} height={262} /> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
