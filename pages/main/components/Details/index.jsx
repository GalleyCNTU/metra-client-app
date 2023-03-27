import classes from './Details.module.scss';

import learnMore from 'public/img/learnMore.png';
import arrow from 'public/img/detailsArrow.svg';

import Image from 'next/image';

export const Details = () => (
  <div className={classes.details}>
    <button className={classes.details_button}>Детальніше</button>
    <div className={classes.details_arrow}>
      <Image src={arrow} />
    </div>
  </div>
);
