import './Footer.scss';

import logo from '../../img/LOGO.PNG';
import up from '../../img/UP.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img className='footer_logo' src={logo} alt="logo" />
            <a href='#header'><img className='footer_up' src={up} alt="up_button" /></a>
        </footer>
    )
}

export default Footer;