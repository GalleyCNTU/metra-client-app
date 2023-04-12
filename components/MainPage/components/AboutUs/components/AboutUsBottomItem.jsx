import Image from 'next/image';

import classes from '../AboutUs.module.scss';

export const AboutUsBottomItem = ({ svg, title, subtitle }) => (
  <div className={classes.aboutUs_block}>
    <div className={classes.aboutUs_image}>
      <Image src={svg} alt="about us" />
    </div>
    <span className={classes.aboutUs_title}>{title}</span>
    <span className={classes.aboutUs_subtitle}>{subtitle}</span>
  </div>
);
