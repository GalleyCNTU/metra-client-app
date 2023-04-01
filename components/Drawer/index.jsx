// Drawer lib
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

//NextJS components
import Image from 'next/image';
import Link from 'next/link';

//class file
import classes from './Drawer.module.scss';

//images
import drawerBodyLogo from 'public/img/drawerBodyLogo.png';
import drawerCloseButton from 'public/img/drawerClose.svg';

import { PAGES } from './constants';

export const Drawer = ({ anchor, isOpen, setIsOpen }) => (
  <SwipeableDrawer
    anchor={anchor}
    open={isOpen}
    onClose={() => setIsOpen(!isOpen)}
    classes={{
      paper: classes.drawer,
      root: classes.drawer_root,
    }}
  >
    <div className={classes.drawer_body}>
      <div className={classes.drawer_body_close}>
        <Image onClick={() => setIsOpen(!isOpen)} src={drawerCloseButton} />
      </div>
      <div className={classes.drawer_body_logo}>
        <Image src={drawerBodyLogo} />
      </div>
      <div className={classes.drawer_body_nav}>
        {PAGES.map((item) => (
          <Link href={item.link}>
            <div className={classes.drawer_body_nav_link}>
              <Image src={item.icon} />
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </SwipeableDrawer>
);
