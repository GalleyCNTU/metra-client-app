import { Layout } from 'components';
import {
  CarBuying,
  AboutUs,
  Conditions,
  BuyingInfo,
  WhyWe,
  PurchasedCars,
  CheckPrice,
} from './components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllAdvertisements, getAllMakes } from '@/data/firebase';
import { enableBot } from '@/utils/enableTelegramBot';

const Main = ({ advertisementList, makes }) => {
  return (
    <Layout>
      <div>
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
        {/* <Header /> */}
        <CarBuying makes={makes} />
        <AboutUs />
        <Conditions />
        <BuyingInfo />
        <WhyWe />
        <PurchasedCars advertisementList={advertisementList} />
        <CheckPrice makes={makes} />
        {/* <Contacts /> */}
        {/* <Footer />  */}
      </div>
    </Layout>
  );
};

export default Main;

export async function getStaticProps() {
  const advertisementList = await getAllAdvertisements();
  const makes = await getAllMakes();
  await enableBot();
  return {
    props: {
      advertisementList,
      makes,
    },
  };
}
