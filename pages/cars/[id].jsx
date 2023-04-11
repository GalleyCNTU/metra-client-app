import { useRouter } from 'next/router';

import { Layout, Drawer } from 'components';
import { Advertisement } from './components';

import { CircularProgress, Box } from '@mui/material';
import { getMakesObj } from '@/data/Firebase';
import { useState } from 'react';

const Car = ({ makes }) => {
  const router = useRouter();
  const id = router.query['id'];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} anchor="left" />
      <Layout
        advMenu={true}
        hideMediaQuery={true}
        makes={makes}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLogo={true}
      >
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
    </>
  );
};

export async function getServerSideProps() {
  const makes = await getMakesObj();
  return {
    props: {
      makes,
    },
  };
}

export default Car;
