//NextJS components
import Image from 'next/image';
import Link from 'next/link';

// Style file
import classes from './Header.module.scss';

// Images
import drawerMenu from 'public/img/whiteDrawerMenu.svg';

import { PHONE_NUMBER_MAIN, PHONE_NUMBER_SECONDARY } from 'constants';

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <header className={classes.header} id="header">
      <div className={classes.header_mobileMenu_button}>
        <Image
          src={drawerMenu}
          onClick={() => setIsOpen(!isOpen)}
          alt="menuButton"
          width="39px"
          height="29px"
        />
      </div>
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

export default Header;
