/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';

import 'semantic-ui-css/semantic.css';
import '../global_style.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
