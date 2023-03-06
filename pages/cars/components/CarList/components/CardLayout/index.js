import { Box, Grid } from '@mui/material';
import classes from './CardLayout.module.scss';

export const CardLayout = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '862px',
        backgroundColor: '#1E1E1E',
        padding: '60px',
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
        className={classes.grid}
      >
        {children}
      </Grid>
    </Box>
  );
};
