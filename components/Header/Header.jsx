//NextJS components
import Image from 'next/image';

// React hooks
import { useState } from 'react';

// Style file
import classes from "./Header.module.scss";

// Drawer lib 
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

// Images
import menuButton from 'public/img/menu.png';
import closeMenu from 'public/img/closeMenu.png';
import logo from 'public/img/LOGO.png';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <header className={classes.header} id="header">
            <div className={classes.header_logo}>
                <div className={classes.header_logo_image}>
                    <Image src={logo} alt="logo" />
                </div>
            </div>
            <div className={classes.header_mobile_menu}>
                <Drawer
                    id="long-value-select"
                    instanceId="long-value-select"
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className={classes.drawer}
                >
                    <div className={classes.drawer_body}>
                        <div className={classes.drawer_body_close}>
                            <div className={classes.drawer_body_close_image}>
                                <Image src={closeMenu} alt="closeMenuButton" width='23px' height='23px' onClick={toggleDrawer} style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className={classes.drawer_body_nav}>
                            <a href='#header' className={classes.drawer_body_nav_link} style={{ color: '#FF8A00' }}>АВТОВИКУП</a>
                            <a href='#purchased' className={classes.drawer_body_nav_link}>АВТО В НАЯВНОСТІ</a>
                            <a href='#contacts' className={classes.drawer_body_nav_link}>КОНТАКТИ</a>
                        </div>
                    </div>
                </Drawer>
                <div className={classes.header_mobile_menu_button} >
                    <Image src={menuButton} onClick={toggleDrawer} alt="menuButton" width='39px' height='29px' style={{ cursor: "pointer" }} />
                </div>
            </div>
            <div className={classes.header_nav}>
                <a href='#header' className={classes.header_nav_link} style={{ color: '#FF8A00' }}>АВТОВИКУП</a>
                <a href='#purchased' className={`${classes.header_nav_link} ${classes.header_nav_link_margined}`}>АВТО В НАЯВНОСТІ</a>
                <a href='#contacts' className={classes.header_nav_link}>КОНТАКТИ</a>
            </div>
            <div className={classes.header_info}>
                <a href="tel:+380631244667"><span className={classes.header_info_number}>063 124 4667</span></a>
                <a href="tel:+380680930002"><span className={`${classes.header_info_number} ${classes.header_info_number_margined}`}>068 093 0002</span></a>
            </div>
        </header>
    )
}

export default Header;