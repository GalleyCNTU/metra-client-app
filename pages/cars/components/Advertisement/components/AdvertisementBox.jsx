import { Typography, Button, Box } from '@mui/material';

import Slider from './SliderComponent';
import MakeIcon from 'assets/MakeIcon.svg';
import StatusIcon from 'assets/StatusIcon.svg';
import EngineIcon from 'assets/EngineIcon.svg';
import OdometerIcon from 'assets/OdometerIcon.svg';
import FuelIcon from 'assets/FuelIcon.svg';
import TransmissionIcon from 'assets/TransmissionIcon.svg';
import DriveIcon from 'assets/DriveIcon.svg';

import classes from './AdvertisementBox.module.scss';

import { TELEGRAM_URL } from 'constants/contacts';
import Image from 'next/image';

const AdvertisementBox = ({
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
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box
          mb={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Slider items={images} make={make} model={model} />
        </Box>
        <Box
          mb={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box className={classes.characteristics_block}>
            <Box className={classes.characteristics_head}>
              <Typography
                className={classes.characteristics_head_make}
                variant="h3"
              >{`${make} ${model}`}</Typography>
              <Typography
                className={classes.characteristics_head_price}
                variant="h3"
              >{`${price}`}</Typography>
            </Box>
            <Box className={classes.characteristics}>
              <Box className={classes.characteristics_column}>
                {descr.map(({ text, img }, index) => (
                  <Box
                    key={index}
                    sx={{}}
                    className={classes.characteristics_column_box}
                  >
                    <Image src={img} alt={make} />
                    <Typography className={classes.characteristics_font}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {description ? (
              <Box mx={3} className={classes.characteristics_column}>
                <Typography
                  className={classes.characteristics_font}
                >{`Опис: ${description}`}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    href={TELEGRAM_URL}
                    className={classes.btn_characteristics}
                  >
                    Детальніше
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  onClick={openLinkHandler}
                  className={classes.btn_characteristics}
                >
                  Детальніше
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdvertisementBox;
