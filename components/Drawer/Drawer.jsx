import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PAGES } from 'continuities';
import classes from './Drawer.module.scss';

import drawerBodyLogo from 'public/img/drawerBodyLogo.png';
import drawerCloseButton from 'public/img/drawerClose.svg';

export const Drawer = ({ isOpen, setIsOpen }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={classes.bg}
        style={{ display: `${isOpen ? 'block' : 'none'}` }}
      ></div>
      <div
        className={classes.drawer_body}
        style={
          isOpen
            ? { overflow: 'visible', opacity: 1, transition: '0.3s all' }
            : {
                overflow: 'hidden',
                opacity: 0,
                transition: '0.3s all',
                pointerEvents: 'none',
              }
        }
        ref={drawerRef}
      >
        <div
          className={classes.drawer_body_close}
          onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
                className={classes.drawer_body_nav_link}
              >
                <Image src={page.icon} alt="page icon" />
                <span>{page.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
