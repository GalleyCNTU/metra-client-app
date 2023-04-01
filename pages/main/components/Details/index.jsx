import classes from './Details.module.scss';

import learnMore from 'public/img/learnMore.png';
import arrow from 'public/img/detailsArrow.svg';

import Image from 'next/image';
import { Button } from '@mui/material';

export const Details = () => (
  <div className={classes.details}>
    <Button className={classes.details_button}>Детальніше</Button>
    <div className={classes.details_arrow}>
      <Image src={arrow} />
    </div>
  </div>
);
