import { Layout } from 'components';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Custom404 = () => {
  return (
    <Layout>
      <IconButton
        size="large"
        style={{
          width: '100%',
          cursor: 'pointer',
          fontFamily: 'Bold',
          fontSize: '70px',
          lineHeight: '116px',
          fontWeight: 900,
          color: '#393e46',
          textShadow: ' 0.375rem 0.375rem 0.625rem rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'flex-start',
          borderRadius: '0%',
        }}
        href={'/cars'}
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
        <Typography variant="h3">Об&#39;яву не знайдено</Typography>
      </Box>
    </Layout>
  );
};

export default Custom404;
