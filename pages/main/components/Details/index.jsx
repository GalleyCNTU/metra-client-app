import Image from 'next/image';

import classes from './Details.module.scss';

import arrow from 'public/img/detailsArrow.svg';

export const Details = () => (
  <div className={classes.details}>
    <button className={classes.details_button}>Детальніше</button>
    <div className={classes.details_arrow}>
      <Image src={arrow} />
    </div>
  </div>
);
