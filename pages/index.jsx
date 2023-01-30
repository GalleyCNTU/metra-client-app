import Header from "../components/Header/Header";
import CarBuying from "../components/CarBuying/CarBuying";
import AboutUs from "../components/AboutUs/AboutUs";
import Conditions from "../components/Conditions/Conditions";
// import WhyWe from "../src/components/WhyWe/WhyWe";
// import PurchasedCars from "../src/components/PurchasedCars/PurchasedCars";
// import Contacts from "../src/components/Contacts/Contacts";
// import Footer from "../src/components/Footer/Footer";
import BuyingInfo from "../components/BuyingInfo/BuyingInfo";
// import CheckPrice from "../src/components/CheckPrice/CheckPrice"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarFormPage = () => {

    return (
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
            <Header />
            <CarBuying />
            <AboutUs />
            <Conditions />
            <BuyingInfo />
            {/* <WhyWe />
            <PurchasedCars />
            <CheckPrice />
            <Contacts />
            <Footer /> */}
        </div>
    );
}

export default CarFormPage;