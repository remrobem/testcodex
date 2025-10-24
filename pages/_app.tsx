import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Church of the Epiphany</title>
        <meta
          name="description"
          content="Church of the Epiphany - a welcoming Anglican community in celebration and service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
