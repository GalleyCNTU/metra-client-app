import classes from './CarBuying.module.scss';
import { CarForm } from "../CarForm";

import IMG from 'public/img/rotated_background.jpg';

export const CarBuying = () => {
    return (
        <div className={classes.car_buying} style={{background:`url(${IMG.src}) no-repeat`, backgroundSize: '100%'}}>
            <div className={classes.car_buying_upper}>
                <div className={classes.car_buying_upper_title}>
                    <span className={classes.car_buying_upper_title_text}>ТЕРМІНОВИЙ ВИКУП АВТО</span>
                </div>
                <div className={classes.car_buying_upper_form}>
                    <CarForm />
                </div>
            </div>
            <div className={classes.car_buying_lower}>
                <div className={classes.car_buying_lower_info}>
                    <span style={{marginTop: 20}}>БУДЬ-ЯКИЙ<br />СТАН ТА ПРОБІГ</span>
                    <span>РІЗНИХ РОКІВ<br />ТА БУДЬ-ЯКИХ МАРОК</span>
                    <span>ЕКОНОМІЯ<br />ЧАСУ ПІД ЧАС ПРОДАЖУ</span>
                    <span>ОФІЦІЙНЕ<br />ОФОРМЛЕННЯ УГОДИ</span>
                </div>
            </div>
        </div>
    )
}