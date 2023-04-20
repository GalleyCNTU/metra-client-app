import Image from 'next/image';
import Link from 'next/link';

import classes from './Details.module.scss';
import arrow from 'public/img/detailsArrow.svg';

export const Details = () => (
  <div className={classes.details}>
    <Link href={'/cars'}>
      <button className={classes.details_button}>Детальніше</button>
    </Link>
    <Link href="#header" scroll={false}>
      <div className={classes.details_arrow}>
        <Image src={arrow} alt="arrow button" />
      </div>
    </Link>
  </div>
);
