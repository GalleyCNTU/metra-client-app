import Image from 'next/image';

import classes from './Details.module.scss';

import arrow from 'public/img/detailsArrow.svg';

import { Button } from '@mui/material';

export const Details = () => (
  <div className={classes.details}>
    <Button className={classes.details_button}>Детальніше</Button>
    <div className={classes.details_arrow}>
      <Image src={arrow} />
    </div>
  </div>
);
