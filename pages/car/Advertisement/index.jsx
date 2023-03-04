import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';

import AdvertisementBox from './components/AdvertisementBox';

const Advertisement = ({ getAdvertisement, id }) => {
  const [adv, setAdv] = useState();

  useEffect(() => {
    getAdvertisement(setAdv, id);
  }, []);
  console.log(adv)
  
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {adv ? <AdvertisementBox 
      color={adv.color} 
      images={adv.images} 
      price={adv.price}
      odometer={adv.odometer}
      transmission={adv.transmission}
      fuel={adv.fuel}
      engine={adv.engine}
      drive={adv.drive}
      description={adv.description}
      model={adv.model}
      make={adv.make}
      year={adv.year}
      />
      :
      null} 
    </Container>
  );
};

export default Advertisement;
