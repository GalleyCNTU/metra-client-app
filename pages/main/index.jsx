import { useState } from 'react';

import {
  Layout,
  Drawer,
  CarList,
  CarBuying,
  AboutUs,
  Conditions,
  BuyingInfo,
  WhyWe,
  MainDetails as Details,
} from 'components';
import { getAdvertisementList, getMakesObj } from 'data/Firebase';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({ advertisementList, makes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen} makes={makes}>
      <div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} anchor="left" />
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
        <CarBuying />
        <AboutUs />
        <Conditions />
        <BuyingInfo />
        <WhyWe />
        <CarList
          advertisementList={advertisementList}
          title={true}
          advsOnPage={3}
        />
        <Details />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const advertisementList = await getAdvertisementList();
  const makes = await getMakesObj();

  return {
    props: {
      advertisementList,
      makes,
    },
  };
};

export default Main;
