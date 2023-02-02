//NextJS components
import Image from 'next/image';

import classes from '../Conditions.module.scss';

export const ConditionsItem = ({ img, title, subtitle }) => (
    <div className={classes.what_cars_bottom_block}>
        <Image src={img} alt="firstCar" className={classes.what_cars_bottom_block_image} />
        <span className={classes.what_cars_bottom_block_title}>
            {title}
        </span>
        <span className={classes.what_cars_bottom_block_subtitle}>
            {subtitle}
        </span>
    </div>
)