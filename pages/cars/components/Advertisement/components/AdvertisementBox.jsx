import Image from 'next/image';

import { TELEGRAM_URL } from 'continuities';

// import { Slider } from './SliderComponent';
import { AsNavFor } from './SlickSlider';

import classes from '../Advertisement.module.scss';

// import MakeIcon from 'public/img/AdvertisementBox/MakeIcon.svg';
import StatusIcon from 'public/img/AdvertisementBox/StatusIcon.svg';
import EngineIcon from 'public/img/AdvertisementBox/EngineIcon.svg';
import OdometerIcon from 'public/img/AdvertisementBox/OdometerIcon.svg';
import FuelIcon from 'public/img/AdvertisementBox/FuelIcon.svg';
import TransmissionIcon from 'public/img/AdvertisementBox/TransmissionIcon.svg';
import DriveIcon from 'public/img/AdvertisementBox/DriveIcon.svg';

import { Typography, Button, Box } from '@mui/material';

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
      <Box className={classes.advertisement}>
        <Box className={classes.advertisement_container}>
          <AsNavFor items={images} make={make} model={model} />
          {/* <Slider
            items={images}
            make={make}
            model={model}
          /> */}
        </Box>

        <Box className={classes.characteristics_container}>
          <Box className={classes.characteristics_block}>
            <Box className={classes.characteristics_title}>
              <Typography
                className={classes.characteristics_title_make}
                variant="h3"
              >{`${make} ${model}`}</Typography>
              <Typography
                className={classes.characteristics_title_price}
                variant="h3"
              >{`${price}`}</Typography>
            </Box>

            <Box className={classes.characteristics_container}>
              <Box className={classes.characteristics_column}>
                {descr.map(({ text, img }, index) => (
                  <Box key={index} className={classes.characteristics_box}>
                    <Image src={img} alt={make} />
                    <Typography className={classes.characteristics_info}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.characteristics_description_container}>
          {description ? (
            <Box className={classes.characteristics_description_block}>
              <Typography
                className={classes.characteristics_description_title}
                variant="h3"
              >
                {'Опис:'}
              </Typography>
              <Typography className={classes.characteristics_description_info}>
                {description}
              </Typography>
              <Box className={classes.btn_characteristics_box}>
                <Button
                  onClick={openLinkHandler}
                  className={classes.btn_characteristics_contact}
                >
                  Детальніше
                </Button>
              </Box>
            </Box>
          ) : (
            <Box className={classes.characteristics_description_block}>
              <Box className={classes.btn_characteristics_box}>
                <Button
                  onClick={openLinkHandler}
                  className={classes.btn_characteristics_contact}
                >
                  Детальніше
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
