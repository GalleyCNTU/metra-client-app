import Image from 'next/image';
import Link from 'next/link';

import { TELEGRAM_URL } from 'continuities';

import classes from './Details.module.scss';
import arrow from 'public/img/detailsArrow.svg';

import { Button } from '@mui/material';

export const Details = ({ isArrow = true }) => (
  <div className={classes.details}>
    <Button
      onClick={() => window.open(TELEGRAM_URL, '_blank')}
      className={classes.details_button}
    >
      Детальніше
    </Button>

    {isArrow && (
      <Link href="#header">
        <div className={classes.details_arrow}>
          <Image src={arrow} alt="arrow button" />
        </div>
      </Link>
    )}
  </div>
);
