import Image from 'next/image';
import Map from './GoogleLocation/GoogleLocation';

import classes from './Contacts.module.scss';

import upArrow from 'public/img/upArrow.svg';

import { location } from './constants';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const Contacts = () => (
  <div className={classes.map}>
    <div id="contacts" className={classes.map_body}>
      <Box className={classes.map_box}>
        <Typography className={classes.map_title}>Ми на карті</Typography>
        <div className={classes.map_bottom}>
          {/* <Map location={location} zoomLevel={15} /> */}
        </div>
        <Box className={classes.map_upArrow_box}>
          <div className={classes.map_upArrow}>
            <Link href="#header">
              <Image className={classes.map_upArrow_img} src={upArrow} alt="" />
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  </div>
);

export default Contacts;
