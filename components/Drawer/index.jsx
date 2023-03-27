// Drawer lib
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

//NextJS components
import Image from 'next/image';
import Link from 'next/link';

//class file
import classes from "./Drawer.module.scss";

//images
import drawerBodyLogo from 'public/img/drawerBodyLogo.png';
import drawerClose from 'public/img/drawerClose.svg';
import calcPaper from 'public/img/calcPaper.svg';
import success from 'public/img/success.svg';
import telephone from 'public/img/telephone.svg';
import money from 'public/img/money.svg';

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
            <Image
            onClick={() => setIsOpen(!isOpen)}
            src={drawerClose} />
          </div>
          <div className={classes.drawer_body_logo}>
            <Image src={drawerBodyLogo} />
          </div>
          <div className={classes.drawer_body_nav}>
            <Link href="/cars">
              <div className={classes.drawer_body_nav_link}>
                <Image src={money} />
                <span>АВТОВИКУП</span>
              </div>
            </Link>
            <Link href="/cars" className={classes.drawer_body_nav_link}>
              <div className={classes.drawer_body_nav_link}>
                <Image src={success} />
                <span>АВТО В НАЯВНОСТІ</span>
              </div>
            </Link>
            <Link href="/cars" className={classes.drawer_body_nav_link}>
              <div className={classes.drawer_body_nav_link}>
                <Image src={telephone} />
                <span>КОНТАКТИ</span>
              </div>
            </Link>
            <Link href="/cars" className={classes.drawer_body_nav_link}>
              <div className={classes.drawer_body_nav_link}>
                <Image src={calcPaper} />
                <span>РОЗРАХУВАТИ ВАРТІСТЬ</span>
              </div>
            </Link>
          </div>
        </div>
      </SwipeableDrawer>
)