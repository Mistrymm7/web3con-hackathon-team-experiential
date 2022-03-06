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
import createEmotionCache from '../src/utils/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

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
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>ExperiAR</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>
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
