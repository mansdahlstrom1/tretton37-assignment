import React from 'react';
import Head from 'next/head';
import '../global_style.css';
import 'semantic-ui-css/semantic.min.css';

import Nav from '../Components/Nav/Nav';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>

    <Nav />
    <Component {...pageProps} />
  </>
);

export default MyApp;
