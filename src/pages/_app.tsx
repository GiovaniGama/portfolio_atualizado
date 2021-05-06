import { Header } from '../components/Header';
import { Footer } from  '../components/Footer';
import Head from 'next/head';

import '../styles/global.scss';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Head>
          <link rel="shortcut icon" href="../static/favicon.ico" />
        </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </div>
  )
}

export default MyApp
