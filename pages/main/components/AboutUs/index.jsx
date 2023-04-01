import classes from './AboutUs.module.scss';

import { AboutUsUpperItem, AboutUsBottomItem } from './components';

import { BOTTOM_ITEMS, UPPER_ITEMS, TITLE } from './constants';

export const AboutUs = () => (
  <div className={classes.aboutUs}>
    <div className={classes.adjoiningBlock}>
      <div className={classes.adjoiningBlock_title}>
        <span className={classes.adjoiningBlock_title_yellow}>{TITLE.beginning}</span>
        <span className={classes.adjoiningBlock_title_black}>{TITLE.end}</span>
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
    <div className={classes.aboutUs_bottom}>
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
