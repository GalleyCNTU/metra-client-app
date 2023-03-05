import { Layout } from 'components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import classes from './Advertisement/components/AdvertisementBox.module.scss';

export default function Custom404() {
  return (
    <Layout>
      <IconButton
        size="large"
        className={classes.btn_back}
        href={'http://localhost:3000/cars'}
      >
        <ArrowBackIcon fontSize="large" />
        Назад
      </IconButton>
      <Box
        mb={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '250px',
        }}
      >
        <Typography variant='h3'>Об&#39;яву не знайдено</Typography>
      </Box>
    </Layout>
  );
}
