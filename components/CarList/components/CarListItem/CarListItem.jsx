import Image from 'next/image';
import classes from './CarListItem.module.scss';
import { Button } from '@mui/material';

const CarListItem = ({
  purchasedCarTitle,
  transmission,
  // engine,
  // drive,
  fuel,
  purchasedCarPrice,
  images,
  odometer,
}) => {
  return (
    <div className={classes.purchased_car} id={classes.purchased}>
      <div className={classes.purchased_car_background_img}>
        <Image
          style={{ borderRadius: '10px' }}
          src={images[0].url}
          alt={images[0].id}
          width={328}
          height={236}
        />
      </div>

      <div className={classes.purchased_car_title}>
        <span>{purchasedCarTitle}</span>
      </div>
      <div className={classes.purchased_car_info}>
        <span>Паливо: {fuel}</span>
        <span>Коробка: {transmission}</span>
        <span>Пробіг: {odometer}</span>
      </div>

      <div className={classes.purchased_car_price}>
        <span className={classes.purchased_car_price_uah}>
          {purchasedCarPrice}
        </span>
      </div>

      <Button className={classes.purchased_car_button}>Детальніше</Button>
    </div>
  );
};

export default CarListItem;
