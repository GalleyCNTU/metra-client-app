//NextJS components
import Image from 'next/image';
import Link from 'next/link';

import { PAGES } from 'continuities';
import classes from './Drawer.module.scss';

//images
import drawerBodyLogo from 'public/img/drawerBodyLogo.png';
import drawerCloseButton from 'public/img/drawerClose.svg';

// Drawer lib
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { IconButton } from '@mui/material';

export const Drawer = ({ anchor, isOpen, setIsOpen }) => (
  <SwipeableDrawer
    anchor={anchor}
    open={isOpen}
    onOpen={() => setIsOpen(!isOpen)}
    onClose={() => setIsOpen(!isOpen)}
    classes={{
      paper: classes.drawer,
      root: classes.drawer_root,
    }}
  >
    <div className={classes.drawer_body}>
      <div
        className={classes.drawer_body_close}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={drawerCloseButton} alt="drawer close button" />
      </div>
      <div className={classes.drawer_body_logo}>
        <Image src={drawerBodyLogo} alt="drawer body logo" />
      </div>
      <div className={classes.drawer_body_nav}>
        {PAGES.map((page, index) => (
          <Link href={page.link} scroll={false} key={index}>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={classes.drawer_body_nav_link}
            >
              <Image src={page.icon} alt="page icon" />
              <span>{page.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </SwipeableDrawer>
);
