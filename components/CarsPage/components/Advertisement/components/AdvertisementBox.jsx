import Image from 'next/image';

import { TELEGRAM_URL } from 'continuities';

import { SliderComponent } from './SliderComponent';
import classes from '../Advertisement.module.scss';

// import MakeIcon from 'public/img/advertisementBox/MakeIcon.svg';
import StatusIcon from 'public/img/advertisementBox/StatusIcon.svg';
import EngineIcon from 'public/img/advertisementBox/EngineIcon.svg';
import OdometerIcon from 'public/img/advertisementBox/OdometerIcon.svg';
import FuelIcon from 'public/img/advertisementBox/FuelIcon.svg';
import TransmissionIcon from 'public/img/advertisementBox/TransmissionIcon.svg';
import DriveIcon from 'public/img/advertisementBox/DriveIcon.svg';

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
  isActive,
}) => {
  const openLinkHandler = () => {
    window.open(TELEGRAM_URL, '_blank');
  };
  const descr = [
    { text: `Коробка:`, value: `${transmission}`, img: TransmissionIcon },
    { text: `Пробіг:`, value: `${odometer} тис.`, img: OdometerIcon },
    { text: `Привід:`, value: `${drive}`, img: DriveIcon },
    { text: `Тип палива:`, value: `${fuel}`, img: FuelIcon },
    { text: `Об'єм двигуна:`, value: `${engine} л.`, img: EngineIcon },
    { text: `Статус:`, value: `${isActive ? "В наявності" : "Продано" }`, img: StatusIcon },
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                className={classes.characteristics_title_price}
                variant="h3"
              >{`${price} USD `}</span>
              </div>
            </div>

            <div className={classes.characteristics_container}>
              <div className={classes.characteristics_column}>
                {descr.map(({ text, img, value }, index) => (
                  <div key={index} className={classes.characteristics_box}>
                    <Image src={img} alt={make} style={{ marginBottom: 2 }} />
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                   <span className={classes.characteristics_info} style={{ marginRight: 5, color: 'rgba(255, 255, 255, .7)' }}>{text}</span>
                   <span className={classes.characteristics_info} style={{ fontWeight: 500 }}>{value}</span>
                   </div>
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
                  Задати питання
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
                  Задати питання
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
