// React hooks
import { useState } from 'react'

// Style file
import style from "./Header.module.scss";

// Drawer lib 
// import Drawer from 'react-modern-drawer'
// import 'react-modern-drawer/dist/index.css'

// Images
import menuButton from '../../../public/img/menu.png'
// import closeMenu from '../../img/closeMenu.png'
import logo from '../../../public/img/LOGO.PNG';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <header className={style.header} id="header">
            <div className={style.header_mobile_menu}>
            <div className={style.header_logo}>
                <img src={logo} alt="logo" />
            </div>
                
                {/* <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className='drawer'
                >
                    <div className='drawer_body'>
                        <div className='drawer_body_close'>
                            <img src={closeMenu} alt="closeMenuButton" width='23px' height='23px' onClick={toggleDrawer} style={{ cursor: "pointer" }} />
                        </div>
                        <div className='drawer_body_nav'>
                            <a href='#header' className='drawer_body_nav_link' style={{ color: '#FF8A00' }}>АВТОВИКУП</a>
                            <a href='#purchased' className='drawer_body_nav_link'>АВТО В НАЯВНОСТІ</a>
                            <a href='#contacts' className='drawer_body_nav_link'>КОНТАКТИ</a>
                        </div>
                    </div>
                </Drawer> */}
            </div>
            <div className={style.header_mobile_menu_button} >
                    <img src={menuButton} onClick={toggleDrawer} alt="menuButton" width='39px' height='29px' style={{ cursor: "pointer" }} />
                </div>
            
            <div className={style.header_nav}>
                <a href='#header' className={style.header_nav_link} style={{ color: '#FF8A00' }}>АВТОВИКУП</a>
                <a href='#purchased' className={`${style.header_nav_link_margined} ${style.header_nav_link}`}>АВТО В НАЯВНОСТІ</a>
                <a href='#contacts' className='header_nav_link'>КОНТАКТИ</a>
            </div>
            <div className='header_info'>
                <a href="tel:+380631244667"><span className={style.header_info_number}>063 124 4667</span></a>
                <a href="tel:+380680930002"><span className={`${style.header_info_number} ${style.header_info_number_margined}`}>068 093 0002</span></a>
            </div>
        </header>
    )
}

export default Header;