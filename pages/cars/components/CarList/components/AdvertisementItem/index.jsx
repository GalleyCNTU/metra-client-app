import classes from './AdvertisementList.module.scss';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const AdvertisementItem = ({
  img,
  make,
  model,
  price,
  fuel,
  transmission,
  odometer,
  id,
}) => {
  return (
    <Item>
      <Paper
        sx={{
          p: 2,
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
          <Grid
            item
            style={{
              display: 'flex',
            }}
            className={classes.img_grid}
          >
            <Image src={img} width="230px" height="172px" alt="complex" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {make}
                  <br />
                  {model}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Паливо: {fuel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Коробка: {transmission}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Пробіг: {odometer} км.
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {price}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  {id ? (
                    <Button
                      href={`/cars/${id}`}
                      variant="outlined"
                      sx={{ borderColor: '#FF8A00', color: '#FF8A00' }}
                    >
                      Детальніше
                    </Button>
                  ) : (
                    <Button disabled variant="outlined">
                      Детальніше
                    </Button>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Item>
  );
};
