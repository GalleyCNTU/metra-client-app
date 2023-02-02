import { ConditionsItem } from './components/ConditionsItem';

//Images
import classes from './Conditions.module.scss';

import firstCar from 'public/img/3-1.png';
import secondCar from 'public/img/3-2.png';
import thirdCar from 'public/img/3-3.png';
import fourthCar from 'public/img/3-4.png';

export const Conditions = () => {

    const items = [
        {
            img: thirdCar,
            title: "Автомобілі у хорошому стані",
            subtitle: "Ми працюємо з великою кількістю автомобілів, в тому числі 'свіжих' років і в гарному стані" 
        },
        {
            img: firstCar,
            title: "Авто після ДТП або не на ходу",
            subtitle: "Викупаємо авто, які втратили свій «товарний вигляд». Ви можете не перейматися стан вашого авто"
        },
        {
            img: fourthCar,
            title: "Авто під арештом, кредитні, заставні",
            subtitle: "Автомобілі у заставі, кредиті, лізингу, з автоломбарду чи в арешті також розглядаємо до автовикупу"
        },
        {
            img: secondCar,
            title: "Авто яким потрібне фарбування",
            subtitle: "Наші фахівці проведуть оцінку та викуп транспорту, незалежно від косметичного стану"
        }
    ]

    return (
        <div className={classes.what_cars}>
            <div className={classes.what_cars_background}>
                <span>?</span>
            </div>
            <div className={classes.what_cars_top}>
                <span className={classes.what_cars_top_title}>Які авто <br /> ми купуємо?</span>
            </div>
            <div className={classes.what_cars_bottom}>
                {items.map((item, i) => (
                    <ConditionsItem
                        key={i}
                        img={item.img}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                ))}
            </div>
        </div>
    )
}