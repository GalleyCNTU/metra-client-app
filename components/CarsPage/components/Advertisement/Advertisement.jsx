import Image from 'next/image';
import Link from 'next/link';

import { AdvertisementBox } from './components';
import classes from './Advertisement.module.scss';

import BackIcon from 'public/img/advertisementBox/BackIcon.svg';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Advertisement = ({ adv }) => (
  <div className={classes.advertisement_body}>
    <div className={classes.btn_box} style={{ marginBottom: 5 }}>
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
          isActive={adv.isActive}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar
              strokeWidth={8}
              value={90}
              styles={buildStyles({
                textColor: '#393e46',
                pathColor: '#ff8a00',
                trailColor: '#393e46',
              })}
            />
          </div>
        </div>
      )}
    </div>
  </div>
);
