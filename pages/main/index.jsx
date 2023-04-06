import { useState } from 'react';

import { Layout, Drawer, CarList, Details } from 'components';
import { getAdvertisementList } from 'data/Firebase';

import {
  CarBuying,
  AboutUs,
  Conditions,
  BuyingInfo,
  WhyWe,
} from './components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({ advertisementList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
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

export const getStaticProps = async () => {
  const advertisementList = await getAdvertisementList();
  return {
    props: {
      advertisementList,
    },
  };
};

export default Main;
