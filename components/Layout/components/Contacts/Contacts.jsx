import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import classes from './Contacts.module.scss';
import upArrow from 'public/img/upArrow.svg';

export const Contacts = ({ hideMediaQuery }) => {
  const LinkComponent = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Image className={classes.map_upArrow_img} src={upArrow} alt="" />
      </a>
    );
  });

  return (
    <div
      className={
        hideMediaQuery ? `${classes.map} ${classes.map_media}` : classes.map
      }
    >
      <div id="contacts" className={classes.map_body}>
        <div className={classes.map_box}>
          <span className={classes.map_title}>Ми на карті</span>
          <div className={classes.map_bottom}>
            {/* <Map location={location} zoomLevel={15} /> */}
          </div>
          <div className={classes.map_upArrow_box}>
            <div className={classes.map_upArrow}>
              <Link href="#header" scroll={false} passHref>
                <a>
                  <Image
                    className={classes.map_upArrow_img}
                    src={upArrow}
                    alt=""
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
