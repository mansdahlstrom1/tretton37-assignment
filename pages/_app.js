import React from 'react';
import Head from 'next/head';
import '../global_style.css';
import 'semantic-ui-css/semantic.min.css';

import Header from '../Components/Header/Header';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>

    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
