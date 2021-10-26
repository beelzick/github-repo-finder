import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/helpers/theme';
import createEmotionCache from '../src/helpers/createEmotionCache';
import Layout from '../src/components/Layout/Layout';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import '../src/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store';
import NextNProgress from 'nextjs-progressbar';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={client}>
            <NextNProgress
              color='#58a6ff'
              options={{ showSpinner: false }}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider >
  );
}

export default MyApp
