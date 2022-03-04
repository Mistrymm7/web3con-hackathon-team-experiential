import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MobileLayout from './components/mobile/MobileLayout';
import 'mapbox-gl/dist/mapbox-gl.css'; // from Mapbox docs
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <MobileLayout>
          <Component {...pageProps} />
        </MobileLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;