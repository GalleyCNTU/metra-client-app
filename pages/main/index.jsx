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

import { getAdvertisementList, getMakesList } from './firebase';

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
  const advertisementList = await getAdvertisementList();
  const makes = await getMakesList();
  return {
    props: {
      advertisementList,
      makes,
    },
  };
}
