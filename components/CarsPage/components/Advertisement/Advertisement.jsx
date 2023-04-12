import Image from 'next/image';
import Link from 'next/link';

import { AdvertisementBox } from './components';
import classes from './Advertisement.module.scss';

import BackIcon from 'public/img/AdvertisementBox/BackIcon.svg';

import { Container, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const Advertisement = ({ adv }) => (
  <Box className={classes.advertisement_body}>
    <Box className={classes.btn_box}>
      <Link href={`/cars`}>
        <IconButton size="large" className={classes.btn_back}>
          <Box className={classes.btn_back_img}>
            <Image src={BackIcon} alt="back-icon" layout="fill" />
          </Box>
          <Box className={classes.btn_back_info}>
            {adv && `${adv.make} ${adv.model}`}
          </Box>
        </IconButton>
      </Link>
    </Box>

    <Container maxWidth={false} className={classes.container}>
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
    </Container>
  </Box>
);
