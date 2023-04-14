import Image from 'next/image';

import classes from '../Conditions.module.scss';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';

export const ConditionsItem = ({ img, title, subtitle, index, icon }) => {
  return (
    <div className={classes.container}>
      {index % 2 !== 0 ? (
        <div className={classes.conditionItem_body}>
          <Box className={classes.conditionItem_unevenRow}>
            <div className={classes.conditionItem_img}>
              <Image src={img} alt="" />
            </div>
            <Box className={classes.conditionItem_container}>
              <div className={classes.conditionItem_unevenIcon}>
                <Image src={icon} alt={`${icon}`} />
              </div>
              <Box className={classes.conditionItem_info}>
                <Typography className={classes.conditionItem_info_title}>
                  {title}
                </Typography>
                <Typography className={classes.conditionItem_info_subtitle}>
                  {subtitle}
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <div className={classes.conditionItem_body}>
          <Box className={classes.conditionItem_evenRow}>
            <Box className={classes.conditionItem_container}>
              <div className={classes.conditionItem_evenIcon}>
                <Image src={icon} alt={`${icon}`} />
              </div>
              <Box className={classes.conditionItem_info}>
                <Typography className={classes.conditionItem_info_title}>
                  {title}
                </Typography>
                <Typography className={classes.conditionItem_info_subtitle}>
                  {subtitle}
                </Typography>
              </Box>
            </Box>
            <div className={classes.conditionItem_img}>
              <Image src={img} alt="" />
            </div>
          </Box>
        </div>
      )}
    </div>
  );
};
