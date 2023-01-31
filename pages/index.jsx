import Header from "../components/Header/Header";
import CarBuying from "../components/CarBuying/CarBuying";
import AboutUs from "../components/AboutUs/AboutUs";
import Conditions from "../components/Conditions/Conditions";
import BuyingInfo from "../components/BuyingInfo/BuyingInfo";
import WhyWe from "../components/WhyWe/WhyWe";
import PurchasedCars from "../components/PurchasedCars/PurchasedCars";
import CheckPrice from "../components/CheckPrice/CheckPrice"
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";



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
            <WhyWe />
            <PurchasedCars />
            <CheckPrice />
            <Contacts />
            <Footer /> 
        </div>
    );
}

export default CarFormPage;