import Image from 'next/image';
import classes from './Footer.module.scss';

import logo from '../../public/img/LOGO.png';
import up from '../../public/img/UP.png';

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.footer_logo}>
      <Image src={logo} alt="logo" />
    </div>
    <a href="#header" className={classes.footer_up}>
      <Image src={up} alt="up_button" />
    </a>
  </footer>
);


export default Footer;
