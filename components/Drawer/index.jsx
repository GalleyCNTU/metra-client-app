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
import { getRandomKey } from 'utils';

export const Drawer = ({ anchor, isOpen, setIsOpen }) => (
  <SwipeableDrawer
    key={getRandomKey}
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
      <div className={classes.drawer_body_close}>
        <Image onClick={() => setIsOpen(!isOpen)} src={drawerCloseButton} />
      </div>
      <div className={classes.drawer_body_logo}>
        <Image src={drawerBodyLogo} />
      </div>
      <div className={classes.drawer_body_nav}>
        {PAGES.map((page) => (
          <Link href={page.link}>
            <div className={classes.drawer_body_nav_link}>
              <Image src={page.icon} />
              <span>{page.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </SwipeableDrawer>
);
