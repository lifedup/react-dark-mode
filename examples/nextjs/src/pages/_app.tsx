import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'theme/styles/global.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>App Title</title>
      <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
