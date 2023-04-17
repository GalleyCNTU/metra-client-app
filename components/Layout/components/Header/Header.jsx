//NextJS components
import Image from 'next/image';
import Link from 'next/link';

// Style file
import classes from './Header.module.scss';

// Images
import headerLogo from 'public/img/headerLogo.svg';

import { PHONE_NUMBER_MAIN, PHONE_NUMBER_SECONDARY } from 'continuities';

export const Header = ({ isOpen, setIsOpen, setLogo = false, advMenu }) => {
  return (
    <header className={classes.header} id="header">
      <div
        className={
          advMenu
            ? `${classes.header_mobileMenu_button} ${classes.header_advMenu_button}`
            : classes.header_mobileMenu_button
        }
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      {setLogo && (
        <div className={classes.header_logo}>
          <Image
            src={headerLogo}
            width="320px"
            height="99px"
            alt="headerLogo"
          />
        </div>
      )}
      <div className={classes.header_info}>
        <Link href={`tel:${PHONE_NUMBER_MAIN}`}>
          <span className={classes.header_info_number}>+380 063 124 4667</span>
        </Link>
        <Link href={`tel:${PHONE_NUMBER_SECONDARY}`}>
          <span className={classes.header_info_number}>+380 068 098 0002</span>
        </Link>
      </div>
    </header>
  );
};
