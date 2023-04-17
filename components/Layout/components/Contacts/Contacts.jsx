import Image from 'next/image';
import Link from 'next/link';

import classes from './Contacts.module.scss';
import upArrow from 'public/img/upArrow.svg';

//uncomment if you need to use google maps
// import { Map } from './GoogleLocation';
// import { location } from 'continuities';

export const Contacts = ({ hideMediaQuery }) => (
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
            <Link href="#header" scroll={false}>
              <Image className={classes.map_upArrow_img} src={upArrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
