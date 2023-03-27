import { Typography } from '@mui/material';
import { WhyWeItem } from './components/WhyWeItem';

import { items } from './constants';

import classes from './WhyWe.module.scss';

export const WhyWe = () => (
  <div className={classes.why_we}>
    <div className={classes.why_we_header}>
      <Typography className={classes.why_we_title}>
        ЧОМУ МИ ВАРТІ ВАШОЇ УВАГИ?
      </Typography>
    </div>
    <div className={classes.container}>
      <div className={classes.why_we_row}>
        {items.map((item, i) => (
          <WhyWeItem key={i} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </div>
  </div>
);
