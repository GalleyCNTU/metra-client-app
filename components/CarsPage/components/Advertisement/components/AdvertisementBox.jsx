import Image from 'next/image';

import { TELEGRAM_URL } from 'continuities';

import { SliderComponent } from './SliderComponent';
import classes from '../Advertisement.module.scss';

// import MakeIcon from 'public/img/AdvertisementBox/MakeIcon.svg';
import StatusIcon from 'public/img/AdvertisementBox/StatusIcon.svg';
import EngineIcon from 'public/img/AdvertisementBox/EngineIcon.svg';
import OdometerIcon from 'public/img/AdvertisementBox/OdometerIcon.svg';
import FuelIcon from 'public/img/AdvertisementBox/FuelIcon.svg';
import TransmissionIcon from 'public/img/AdvertisementBox/TransmissionIcon.svg';
import DriveIcon from 'public/img/AdvertisementBox/DriveIcon.svg';

export const AdvertisementBox = ({
  images,
  make,
  model,
  description,
  fuel,
  odometer,
  drive,
  engine,
  price,
  transmission,
  status,
}) => {
  const openLinkHandler = () => {
    window.open(TELEGRAM_URL, '_blank');
  };
  const descr = [
    { text: `Коробка: ${transmission}`, img: TransmissionIcon },
    { text: `Пробіг: ${odometer} тис.`, img: OdometerIcon },
    { text: `Привід: ${drive}`, img: DriveIcon },
    { text: `Тип палива: ${fuel}`, img: FuelIcon },
    { text: `Об'єм двигуна: ${engine} л.`, img: EngineIcon },
    { text: `Статус: ${status}`, img: StatusIcon },
  ];
  return (
    <>
      <div className={classes.advertisement}>
        <div className={classes.advertisement_container}>
          <SliderComponent items={images} make={make} model={model} />
        </div>

        <div className={classes.characteristics_container}>
          <div className={classes.characteristics_block}>
            <div className={classes.characteristics_title}>
              <span
                className={classes.characteristics_title_make}
                variant="h3"
              >{`${make} ${model}`}</span>
              <span
                className={classes.characteristics_title_price}
                variant="h3"
              >{`${price}$ / ${price * 38}₴`}</span>
            </div>

            <div className={classes.characteristics_container}>
              <div className={classes.characteristics_column}>
                {descr.map(({ text, img }, index) => (
                  <div key={index} className={classes.characteristics_box}>
                    <Image src={img} alt={make} />
                    <span className={classes.characteristics_info}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.characteristics_description_container}>
          {description ? (
            <div className={classes.characteristics_description_box}>
              <div className={classes.characteristics_description_block}>
                <span
                  className={classes.characteristics_description_title}
                  variant="h3"
                >
                  {'Опис'}
                </span>
                <span className={classes.characteristics_description_info}>
                  {description}
                </span>
              </div>
              <div className={classes.btn_characteristics_box}>
                <button
                  onClick={openLinkHandler}
                  className={classes.btn_characteristics_contact}
                >
                  Детальніше
                </button>
              </div>
            </div>
          ) : (
            <div className={classes.characteristics_description_box}>
              <div className={classes.btn_characteristics_box}>
                <button
                  onClick={openLinkHandler}
                  className={classes.btn_characteristics_contact}
                >
                  Детальніше
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
