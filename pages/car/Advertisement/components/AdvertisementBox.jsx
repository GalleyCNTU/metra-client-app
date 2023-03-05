import { Typography, Button, Box } from '@mui/material';
import Slider from './SliderComponent';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import classes from './AdvertisementBox.module.scss';

import { VIBER_URL } from 'constants/contacts';

const AdvertisementBox = ({
  color,
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
  year,
}) => {
  return (
    <>
      <Box
        my={5}
        sx={{
          borderRadius: '10px',
          width: '100%',
          backgroundColor: '#1E1E1E',
        }}
      >
        <Box
          mb={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Slider items={images} />
        </Box>
        <Box ml={3}>
          <Typography
            mb={1}
            sx={{
              fontFamily: 'Gilroy',
              fontWeight: 800,
              fontSize: '28px',
              color: 'white',
            }}
            variant="h3"
          >{`${make} ${model}`}</Typography>
          <Typography
            sx={{
              fontFamily: 'Gilroy',
              fontWeight: 800,
              fontSize: '24px',
              color: 'white',
            }}
            variant="h3"
          >{`${price}`}</Typography>
        </Box>
        <hr style={{ height: '2px', color: 'white' }}></hr>
        <Box mx={3} className={classes.characteristics}>
          <Box className={classes.characteristics_column}>
            <Typography
              className={classes.characteristics_font}
            >{`Об'єм двигуна: ${engine} л.`}</Typography>
            <Typography
              className={classes.characteristics_font}
            >{`Пробіг: ${odometer} тис.`}</Typography>
            <Typography
              className={classes.characteristics_font}
            >{`Тип палива: ${fuel}`}</Typography>
            <Typography
              className={classes.characteristics_font}
            >{`Рік: ${year} року`}</Typography>
            <Typography
              className={classes.characteristics_font}
            >{`Коробка: ${transmission}`}</Typography>
            <Typography
              className={classes.characteristics_font}
            >{`Колір: ${color}`}</Typography>
            <Typography
              className={classes.characteristics_font}
            >{`Привід: ${drive}`}</Typography>
          </Box>
        </Box>

        {description ? (
          <Box>
            <hr style={{ height: '2px', color: 'white' }}></hr>
            <Typography
              className={classes.characteristics_font}
            >{`Опис: ${description}`}</Typography>
            <Box
              my={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button href={VIBER_URL} className={classes.btn_characteristics}>
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
            <Button href={VIBER_URL} className={classes.btn_characteristics}>
              Детальніше
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AdvertisementBox;
