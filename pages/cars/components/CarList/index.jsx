import classes from './CarList.module.scss';

import { useState, useEffect } from 'react';

import { Box, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { AdvertisementItem } from './components/AdvertisementItem';
import { getRandomKey } from '@/utils/getRandomKey';

export const CarList = ({ filteredAdvList }) => {
  const [advertisements, setAdvertisements] = useState();

  useEffect(() => setAdvertisements(filteredAdvList), [filteredAdvList]);

  if (advertisements === null) {
    call();
  }

  function call() {}

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '862px',
        backgroundColor: '#1E1E1E',
        padding: '60px',
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
        className={classes.grid}
      >
        {advertisements ? (
          advertisements.map((item) => (
            <Grid
              item
              style={{
                width: '33%',
                height: '100%',
                minWidth: 262,
                maxWidth: 500,
              }}
            >
              <AdvertisementItem
                make={item.make}
                model={item.model}
                price={item.price}
                img={item.images[0].url}
                fuel={item.fuel}
                transmission={item.transmission}
                odometer={item.odometer}
                id={item.id}
                key={getRandomKey()}
              />
            </Grid>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              height: '10vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress sx={{ color: '#ff8a00' }} />
          </div>
        )}
      </Grid>
    </Box>
  );
};
