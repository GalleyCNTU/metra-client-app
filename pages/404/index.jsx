import { Layout } from 'components';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Custom404 = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
        }}
      >
        <Typography variant="h3">Page not found</Typography>
      </Box>
    </Layout>
  );
};

export default Custom404;
