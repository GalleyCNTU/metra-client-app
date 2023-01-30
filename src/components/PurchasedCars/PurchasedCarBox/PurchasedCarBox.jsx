import './PurchasedCarBox.scss';
import Slider from './SliderComponent';

const PurchasedCarBox = ({ purchasedCarTitle, purchasedCarSubtitle, purchasedCarPriceUSD, purchasedCarPriceUAH, items }) => {

    return (
        <div className="purchased_car" id='purchased'>
            <div className="purchased_car_background_img" >
                <Slider items={items}/>
            </div>

            <div className="purchased_car_title">
                <span>{purchasedCarTitle}</span>
            </div>

            <div className="purchased_car_subtitle">
                <span>{purchasedCarSubtitle}</span>
            </div>

            <div className="purchased_car_price">
                <span className='purchased_car_price_usd'>{purchasedCarPriceUSD}</span>
                <span className='purchased_car_price_between'>/</span>
                <span className='purchased_car_price_uah'>{purchasedCarPriceUAH}</span>
            </div>
        </div>
    )
}

export default PurchasedCarBox;