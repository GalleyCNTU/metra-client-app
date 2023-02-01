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
            <PurchasedCars />
            <CheckPrice />
            {/* <Contacts /> */}
            {/* <Footer />  */}
        </div>
        </Layout>
    );
}

export default Main;