import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import Slider from './SliderComponent';

import classes from './AdvertisementBox.module.scss';

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
  const pallete = {
    color: '#FF8A00',
  };
  return (
    <Box
      my={5}
      sx={{
        borderRadius: '10px',
        width: '100%',
        backgroundColor: '#1E1E1E',
      }}
    >
      <Box
        my={5}
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
        </Box>
        <Box className={classes.characteristics_column}>
          <Typography
            className={classes.characteristics_font}
          >{`Рік: ${year} року`}</Typography>
          <Typography
            className={classes.characteristics_font}
          >{`Коробка: ${transmission}`}</Typography>
          <Typography
            className={classes.characteristics_font}
          >{`Колір: ${color}`}</Typography>
        </Box>
        <Box className={classes.characteristics_column}>
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
            <utton className={classes.characteristics_btn}>Далі</utton>
          </Box>
        </Box>
      ) : (
        <Box
          my={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <utton className={classes.characteristics_btn}>Далі</utton>
        </Box>
      )}
    </Box>
  );
};

export default AdvertisementBox;
