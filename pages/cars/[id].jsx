import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Layout, Advertisement, Drawer } from 'components';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { getMakesObj } from 'data/Firebase';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        advMenu={true}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {adv ? (
          <Advertisement adv={adv} />
        ) : (
          <div
            style={{
              width: '100%',
              height: 300,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                strokeWidth={8}
                value={90}
                styles={buildStyles({
                  textColor: '#393e46',
                  pathColor: '#ff8a00',
                  trailColor: '#393e46',
                })}
              />
            </div>
          </div>
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
