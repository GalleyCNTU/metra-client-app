import classes from './CarBuying.module.scss';

import yellowCarBackground from 'public/img/carBuyingYellow.png';

export const CarBuying = () => {
  return (
    <div className={classes.carBuying}>
      <div className={classes.carBuying_upper}>
        <div className={classes.carBuying_upper_title}>
          <span className={classes.carBuying_upper_title_text}>
            ТЕРМІНОВИЙ ВИКУП АВТО
          </span>
        </div>
        <div
          className={classes.carBuying_upper_car}
          style={{
            background: `url(${yellowCarBackground.src}) no-repeat`,
            backgroundSize: '100%',
          }}
        ></div>
      </div>
    </div>
  );
};
