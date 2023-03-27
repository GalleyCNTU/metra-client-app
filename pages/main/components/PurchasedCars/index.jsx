import PurchasedCarBox from './components/PurchasedCarBox';
import classes from './PurchasedCars.module.scss';

import { getRandomKey } from 'utils';

export const PurchasedCars = ({ advertisementList }) => {
  return (
    <div className={classes.purchased_cars} id="purchased">
      <div className={classes.purchased_cars_top}>
        <span className={classes.purchased_cars_top_title}>
          Останні викуплені автомобілі
        </span>
      </div>

      <div className={classes.purchased_cars_bottom}>
        <div className={classes.purchased_cars_bottom_list}>
          {advertisementList.map((item, i) => {
            return (
              <PurchasedCarBox
                images={item.images}
                purchasedCarTitle={`${item.make} ${item.model}`}
                transmission={item.transmission}
                drive={item.drive}
                fuel={item.fuel}
                engine={item.engine}
                odometer={item.odometer}
                purchasedCarPrice={item.price}
                key={getRandomKey(item[i])}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// // ${item.year} р., ${
//   item.odometer !== '0'
//     ? item.odometer + ' тис.'
//     : item.odometer + ' км.'
// },
