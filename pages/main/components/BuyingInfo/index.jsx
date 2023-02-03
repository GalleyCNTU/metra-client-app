//NextJS components
import Image from 'next/image';

import {BuyingInfoItem} from './components/BuyingInfoItem';
import {items} from './constans'

import classes from './BuyingInfo.module.scss';
import arrow from 'public/img/arrow.png';

export const BuyingInfo = () => (
  <div className={classes.buying_info}>
    <div className={classes.buying_info_background}>
      <div className={classes.buying_info_background_arrow}>
        <Image src={arrow} alt="" layout="fill" />
      </div>
    </div>
    <div className={classes.buying_info_header}>
      <span className={`${classes.buying_info_header} ${classes.title}`}>
        ЯК ВІДБУВАЄТЬСЯ
        <br />
        ВИКУП АВТО?
      </span>
    </div>
    <div className={classes.buying_info_row}>
      {items.map((item, i) => (
        <BuyingInfoItem
          key={i}
          i = {i}
          title={item.title}
          subtitle={item.subtitle}
          width={item.svg.width}
          height={item.svg.height}
          path={item.svg.path}
        />
      ))}
    </div>
  </div>
);
