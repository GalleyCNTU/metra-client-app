import Image from 'next/image';

import classes from '../AboutUs.module.scss';

export const AboutUsUpperItem = ({ svg, title, subtitle }) => (
  <div className={classes.adjoiningBlock_item}>
    <div className={classes.adjoiningBlock_item_image}>
      <Image src={svg} />
    </div>
    <span className={classes.adjoiningBlock_item_title}>{title}</span>
    <span className={classes.adjoiningBlock_item_text}>{subtitle}</span>
  </div>
);
