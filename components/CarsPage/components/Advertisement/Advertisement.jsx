import Image from 'next/image';
import Link from 'next/link';

import { AdvertisementBox } from './components';
import classes from './Advertisement.module.scss';

import BackIcon from 'public/img/AdvertisementBox/BackIcon.svg';

import { CircularProgress } from '@mui/material';

export const Advertisement = ({ adv }) => (
  <div className={classes.advertisement_body}>
    <div className={classes.btn_box}>
      <Link href={`/cars`}>
        <button size="large" className={classes.btn_back}>
          <div className={classes.btn_back_img}>
            <Image src={BackIcon} alt="back-icon" layout="fill" />
          </div>
          <div className={classes.btn_back_info}>
            {adv && `${adv.make} ${adv.model}`}
          </div>
        </button>
      </Link>
    </div>

    <div maxWidth={false} className={classes.container}>
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
        <div
          className={classes.loader}
          sx={{
            height: '400px',
          }}
        >
          <CircularProgress className={classes.loader_color} />
        </div>
      )}
    </div>
  </div>
);
