import Advertisement from './components/Advertisement/';
import { getAdvertisement } from '@/data/firebase';
import { useRouter } from 'next/router';
import { CircularProgress, Box } from '@mui/material';

import { Layout } from '../../components';

const Car = () => {
  let router = useRouter();
  let id = router.query['id'];
  return (
    <Layout>
      {id ? (
        <Advertisement getAdvertisement={getAdvertisement} id={id} />
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
