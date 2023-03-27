//NextJS components
import Image from 'next/image';

// Style file
import classes from './Header.module.scss';

// Images
import drawerMenu from 'public/img/whiteDrawerMenu.svg';

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
          style={{ cursor: 'pointer', height: '250px' }}
        />
      </div>
      <div className={classes.header_info}>
        <a href="tel:+380631244667">
          <span className={classes.header_info_number}>063 124 4667</span>
        </a>
        <a href="tel:+380680930002">
          <span className={classes.header_info_number}>068 093 0002</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
