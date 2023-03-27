import { Box, Grid } from '@mui/material';
import classes from './EmptyCarList.module.scss';

export const EmptyCarList = ( ) => {
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
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <span
            style={{
              color: 'white',
              fontFamily: 'Gilroy',
              fontSize: 48,
              textAlign: 'center',
            }}
          >
            Об&#39;яв не знайдено
          </span>
        </div>
      </Grid>
    </Box>
  );
};
