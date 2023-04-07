import Image from 'next/image';
import Link from 'next/link';

import classes from './Contacts.module.scss';
import upArrow from 'public/img/upArrow.svg';

// import { Map } from './GoogleLocation';
// import { location } from 'continuities';

import { Box, Typography } from '@mui/material';

export const Contacts = ({ hideMediaQuery }) => (
  <div
    className={
      hideMediaQuery ? `${classes.map} ${classes.map_media}` : classes.map
    }
  >
    <div id="contacts" className={classes.map_body}>
      <Box className={classes.map_box}>
        <Typography className={classes.map_title}>Ми на карті</Typography>
        <div className={classes.map_bottom}>
          {/* <Map location={location} zoomLevel={15} /> */}
        </div>
        <Box className={classes.map_upArrow_box}>
          <div className={classes.map_upArrow}>
            <Link href="#header" scroll={false}>
              <Image className={classes.map_upArrow_img} src={upArrow} alt="" />
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  </div>
);
