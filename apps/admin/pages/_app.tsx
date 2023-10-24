import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Layout from '../components/layout/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Welcome to admin!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default CustomApp;
