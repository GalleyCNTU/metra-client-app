import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { getAdvertisement } from 'data/Firebase';

import { AdvertisementBox } from './components';
import classes from './Advertisement.module.scss';

import BackIcon from 'public/img/AdvertisementBox/BackIcon.svg';

import { Container, CircularProgress, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const Advertisement = ({ id }) => {
  const router = useRouter();
  const [adv, setAdv] = useState();

  useEffect(() => {
    const getAdv = async () => {
      const adv = await getAdvertisement(id);

      if (adv) setAdv(adv);
      else router.push(`/cars/404`);
    };
    getAdv();
  }, []);

  return (
    <Box className={classes.advertisement_body}>
      <Box className={classes.btn_box}>
        <Link href={`/cars`}>
          <IconButton size="large" className={classes.btn_back}>
            <Image src={BackIcon} alt="back-icon" />
            {adv && `${adv.make} ${adv.model}`}
          </IconButton>
        </Link>
      </Box>

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
            className={classes.loader}
            sx={{
              height: '400px',
            }}
          >
            <CircularProgress className={classes.loader_color} />
          </Box>
        )}
      </Container>
    </Box>
  );
};
