import { Box, Typography } from '@mui/material';
import classes from '../WhyWe.module.scss';

export const WhyWeItem = ({ title, subtitle }) => (
  <Box className={classes.why_we_item_block}>
    <Box className={classes.why_we_item_info}>
      <Box className={classes.why_we_item_header}>
        <Typography className={classes.why_we_item_title}>{title}</Typography>
        <Typography
          className={`${classes.why_we_item_title} ${classes.why_we_item_plus}`}
        >
          +
        </Typography>
      </Box>
      <Typography className={classes.why_we_item_subtitle}>
        {subtitle}
      </Typography>
    </Box>
  </Box>
);
