import Image from 'next/image';
import Link from 'next/link';

import classes from './CarListItem.module.scss';

import { Button } from '@mui/material';

export const CarListItem = ({
  purchasedCarTitle,
  transmission,
  // engine,
  // drive,
  fuel,
  purchasedCarPrice,
  images,
  odometer,
  id,
}) => {
  return (
    <Link href={`/cars/${id}`}>
      <div className={classes.purchased_car} id={classes.purchased}>
        <div className={classes.purchased_car_background_img}>
          <Image
            style={{ borderRadius: '10px' }}
            src={images[0].url}
            alt={images[0].id}
            layout='fill'
            objectFit='cover'
            objectPosition={"50% 100%"}
          />
        </div>

        <div className={classes.purchased_car_title}>
          <span>{purchasedCarTitle}</span>
        </div>
        <div className={classes.purchased_car_info}>
          <span>Паливо: {fuel}</span>
          <span>Коробка: {transmission}</span>
          <span>Пробіг: {odometer} км.</span>
        </div>

        <div className={classes.purchased_car_price}>
          <span className={classes.purchased_car_price_uah}>
            {purchasedCarPrice}
          </span>
        </div>

        <Button className={classes.purchased_car_button}>Детальніше</Button>
      </div>
    </Link>
  );
};
