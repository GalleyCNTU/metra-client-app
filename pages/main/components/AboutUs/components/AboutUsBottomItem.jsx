import Image from 'next/image';

import classes from '../AboutUs.module.scss';

export const AboutUsBottomItem = ({ svg, title, subtitle }) => (
  <div className={classes.about_us_block}>
    <div className={classes.about_us_image}>
      <Image src={svg} />
    </div>
    <span className={classes.about_us_title}>{title}</span>
    <span className={classes.about_us_subtitle}>{subtitle}</span>
  </div>
);
