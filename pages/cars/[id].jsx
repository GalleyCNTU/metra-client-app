import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Layout, Advertisement, Drawer } from 'components';

import { CircularProgress, Box } from '@mui/material';
import { getMakesObj } from 'data/Firebase';

const Car = ({ makes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adv, setAdv] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const id = router.query['id'];

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(id),
    };
    fetch('/api/firebase/getAdvertisement', requestOptions)
      .then((res) => res.json())
      .then(({ adv }) => {
        if (adv) setAdv(adv);
        else router.push(`/cars/404`);
      });
  }, []);

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} anchor="left" />
      <Layout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hideMediaQuery={true}
        makes={makes}
      >
        {adv ? (
          <Advertisement adv={adv} />
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
