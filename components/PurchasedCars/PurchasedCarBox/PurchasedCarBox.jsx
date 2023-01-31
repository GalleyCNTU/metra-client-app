import classes from "./PurchasedCarBox.module.scss";
import Slider from './SliderComponent.jsx';

const PurchasedCarBox = ({ purchasedCarTitle, purchasedCarSubtitle, purchasedCarPriceUSD, purchasedCarPriceUAH, items }) => {

    return (
        <div className={classes.purchased_car} id={classes.purchased}>
            <div className={classes.purchased_car_background_img}>
                <Slider items={items}/>
            </div>

            <div className={classes.purchased_car_title}>
                <span>{purchasedCarTitle}</span>
            </div>

            <div className={classes.purchased_car_subtitle}>
                <span>{purchasedCarSubtitle}</span>
            </div>

            <div className={classes.purchased_car_price}>
                <span className={classes.purchased_car_price_usd}>{purchasedCarPriceUSD}</span>
                <span className={classes.purchased_car_price_between}>/</span>
                <span className={classes.purchased_car_price_uah}>{purchasedCarPriceUAH}</span>
            </div>
        </div>
    )
}

export default PurchasedCarBox;