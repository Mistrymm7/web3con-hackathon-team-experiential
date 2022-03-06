import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChatBubble, Home } from '@mui/icons-material';

// String currentPage
export default function MobileNav() {
  const router = useRouter();
  const [navIndex, setNavIndex] = useState(0);

  useEffect(() => {
    // check which page is active so that it's highlighted on the nav
    switch (router.pathname) {
      case '/ar':
        setNavIndex(0);
        break;
      case '/map':
        setNavIndex(1);
        break;
      case '/':
        setNavIndex(2);
        break;
      case '/messages':
        setNavIndex(3);
        break;
    }
  }, [router.pathname]);

  return (
    <BottomNavigation
      sx={{ bottom: 0, position: 'fixed', width: '100%' }}
      showLabels
      value={navIndex}
    >
      <BottomNavigationAction
        label="AR View"
        icon={<ViewInArIcon />}
        onClick={() => {
          router.push('/ar');
        }}
      />
      <BottomNavigationAction
        label="Map View"
        icon={<LocationOnIcon />}
        onClick={() => {
          router.push('/map');
        }}
      />
      <BottomNavigationAction
        label="Home"
        icon={<Home />}
        onClick={() => {
          router.push('/');
        }}
      />
      <BottomNavigationAction
        label="Messages"
        icon={<ChatBubble />}
        onClick={() => {
          router.push('/messages');
        }}
      />
    </BottomNavigation>
  );
}
