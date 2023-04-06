import { conditionsItems as items } from 'continuities';

import { ConditionsItem } from './components';
import classes from './Conditions.module.scss';

import { Typography } from '@mui/material';

export const Conditions = () => {
  return (
    <div className={classes.conditions}>
      <div className={classes.conditions_title}>
        <Typography className={classes.conditions_title_info}>
          ЯКІ АВТО МИ КУПУЄМО?
        </Typography>
      </div>
      <div>
        {items.map((item, i) => (
          <ConditionsItem
            key={i}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            index={i}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
