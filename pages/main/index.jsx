import { Layout } from 'components'
import {
    CarBuying,
    AboutUs,
    Conditions,
    BuyingInfo,
    WhyWe,
    PurchasedCars,
    CheckPrice
} from "./components"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export async function getServerSideProps ()  {
//     try {

//         let advertisementList = [];

//         advertisementList = JSON.parse(JSON.stringify(getAdvertisementList(advertisementList)))

//         return { props: { advertisementList } };
//       } catch (e) {
//         return { notFound: true };
//       }
// }

const Main = () => {
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
                <CarBuying />
                <AboutUs />
                <Conditions />
                <BuyingInfo />
                <WhyWe />
                <PurchasedCars/>
                <CheckPrice />
                {/* <Contacts /> */}
                {/* <Footer />  */}
            </div>
        </Layout>
    );
}

export default Main;