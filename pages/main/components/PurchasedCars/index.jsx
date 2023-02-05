import { useState, useEffect } from 'react';
import { getAdvertisementList } from '../firebase';

import PurchasedCarBox from './components/PurchasedCarBox';
import classes from "./PurchasedCars.module.scss";

import { getRandomKey } from 'utils';

export const PurchasedCars = () => {

    const [advertisementList, setAdvertisementList] = useState([]);
    useEffect(() => {
        getAdvertisementList(setAdvertisementList);
    }, []);

    console.log(advertisementList);

    return (
        <div className={classes.purchased_cars} id="purchased">
            <div className={classes.purchased_cars_top}>
                <span className={classes.purchased_cars_top_title}>
                    Останні викуплені автомобілі
                </span>
            </div>

            <div className={classes.purchased_cars_bottom}>
                <div className={classes.purchased_cars_bottom_list}>
                    {
                        advertisementList.map((item, i) => {
                            return (
                                <PurchasedCarBox
                                    images={item.images}
                                    purchasedCarTitle={`${item.make} ${item.model}`}
                                    purchasedCarSubtitle={
                                        `${item.year} р., ${item.odometer !== "0" ? item.odometer + " тис." : item.odometer + " км."}, ${item.fuel}, ${item.engine}, ${item.drive}, ${item.transmission}`
                                    }
                                    purchasedCarPrice={item.usd}
                                    key={getRandomKey(item[i])}
                                />
                            )
                        })
                    }
                </div>
                <div className={classes.purchased_cars_bottom_button}>
                    <a href="#price"><button>ДІЗНАТИСЯ ВАРТІСТЬ</button></a>
                </div>

            </div>
        </div>
    )
}           