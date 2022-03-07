import MobileNav from './MobileNav';
import { Box } from '@mui/material';

const MobileLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ width: "100vw", height: 'calc(100vh - 60px)' }}>
        {children}
      </Box>
      <MobileNav />
    </>
  );
};

export default MobileLayout;
