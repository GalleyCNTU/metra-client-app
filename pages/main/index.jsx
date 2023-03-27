import { useState } from 'react';

import { Layout, Drawer } from 'components';
import {
  CarBuying,
  AboutUs,
  Conditions,
  BuyingInfo,
  WhyWe,
  PurchasedCars,
  CheckPrice,
  Details,
} from './components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllAdvertisements, getAllMakes } from '@/data/firebase';

const Main = ({ advertisementList, makes }) => {
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
        <CarBuying isOpen={isOpen} setIsOpen={setIsOpen} />
        <AboutUs />
        <Conditions />
        <BuyingInfo />
        <WhyWe />
        <PurchasedCars advertisementList={advertisementList} />
        <CheckPrice makes={makes} />
        <Details />
      </div>
    </Layout>
  );
};

export default Main;

export async function getStaticProps() {
  const advertisementList = await getAllAdvertisements();
  const makes = await getAllMakes();
  return {
    props: {
      advertisementList,
      makes,
    },
  };
}
