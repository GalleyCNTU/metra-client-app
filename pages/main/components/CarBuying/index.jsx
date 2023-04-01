import Image from 'next/image';

import classes from './CarBuying.module.scss';

import yellowCarBackground from 'public/img/carBuyingYellow.png';
import drawerMenu from 'public/img/blackDrawerMenu.svg';

export const CarBuying = ({isOpen, setIsOpen}) => {
  return (
    <div className={classes.carBuying}>
      <div className={classes.mobileMenu_button}>
        <Image
          src={drawerMenu}
          onClick={() => setIsOpen(!isOpen)}
          alt="menuButton"
          width="39px"
          height="29px"
        />
      </div>
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
