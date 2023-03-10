import { Container, CircularProgress, Box } from '@mui/material';

import React, { useState, useEffect } from 'react';

import classes from './components/AdvertisementBox.module.scss';
import { useRouter } from 'next/router';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import AdvertisementBox from './components/AdvertisementBox';

const Advertisement = ({ getAdvertisement, id }) => {
  const router = useRouter();
  const [adv, setAdv] = useState();

  useEffect(() => {
    getAdvertisement(setAdv, id);
  }, []);

  if (adv === null) {
    call();
  }

  function call() {
    router.push(`/cars/404`);
  }

  return (
    <>
      <IconButton size="large" className={classes.btn_back} href={'/cars'}>
        <ArrowBackIcon fontSize="large" />
        Назад
      </IconButton>
      <Container maxWidth={false} className={classes.container}>
        {adv ? (
          <AdvertisementBox
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
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
            }}
          >
            <CircularProgress sx={{ color: '#ff8a00' }} />
          </Box>
        )}
      </Container>
    </>
  );
};

export default Advertisement;
