import React from 'react';
import {
  initialize,
  networks,
  Provider as HyperverseProvider,
} from '@decentology/hyperverse';
import { Ethereum } from '@decentology/hyperverse-ethereum';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MobileLayout from './components/mobile/MobileLayout';
import 'mapbox-gl/dist/mapbox-gl.css'; // from Mapbox docs
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: networks.Mainnet,
    storage: {},
    modules: [],
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <HyperverseProvider initialState={hyperverse}>
          <MobileLayout>
            <ToastContainer />
            <Component {...pageProps} />
          </MobileLayout>
        </HyperverseProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
