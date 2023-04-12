import { buyingInfoItems as items } from 'continuities';

import { BuyingInfoItem } from './components';
import classes from './BuyingInfo.module.scss';

import { Typography } from '@mui/material';

export const BuyingInfo = () => (
  <div className={classes.buying_info}>
    <div className={classes.buying_info_header}>
      <Typography className={classes.buying_info_title}>
        ЯК ВІДБУВАЄТЬСЯ ВИКУП АВТО?
      </Typography>
    </div>
    <div className={classes.container}>
      <div className={classes.buying_info_row}>
        {items.map((item, i) => (
          <BuyingInfoItem
            key={i}
            i={i}
            title={item.title}
            subtitle={item.subtitle}
            width={item.svg.width}
            height={item.svg.height}
            path={item.svg.path}
          />
        ))}
      </div>
    </div>
  </div>
);
