import Image from 'next/image';
import classes from './AboutUs.module.scss';

import { AboutUsUpperItem, AboutUsBottomItem } from './components/index';

import { BOTTOM_ITEMS, UPPER_ITEMS } from './constants';

export const AboutUs = () => (
  <div className={classes.about_us}>
    <div className={classes.adjoiningBlock}>
      <div className={classes.adjoiningBlock_title}>
        <span className={classes.adjoiningBlock_title_yellow}>METRA AVTO</span>
        <span className={classes.adjoiningBlock_title_black}> - ЦЕ</span>
      </div>
      {UPPER_ITEMS.map((item, i) => (
        <AboutUsUpperItem
          key={i}
          svg={item.svg}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
    <div className={classes.about_us_bottom}>
      {BOTTOM_ITEMS.map((item, i) => (
        <AboutUsBottomItem
          key={i}
          svg={item.svg}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  </div>
);
