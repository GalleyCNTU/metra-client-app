import { whyWeItems as items } from 'continuities';

import { WhyWeItem } from './components/WhyWeItem';
import classes from './WhyWe.module.scss';

export const WhyWe = () => (
  <div className={classes.why_we}>
    <div className={classes.why_we_header}>
      <span className={classes.why_we_title}>
        ЧОМУ МИ ВАРТІ ВАШОЇ УВАГИ?
      </span>
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
