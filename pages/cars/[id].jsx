import { useRouter } from 'next/router';

import { Layout } from 'components';
import { Advertisement } from './components';

import { CircularProgress, Box } from '@mui/material';

const Car = () => {
  const router = useRouter();
  const id = router.query['id'];

  return (
    <Layout hideMediaQuery={true}>
      {id ? (
        <Advertisement id={id} />
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px',
          }}
        >
          <CircularProgress sx={{ color: '#ff8a00' }} />
        </Box>
      )}
    </Layout>
  );
};

export default Car;
