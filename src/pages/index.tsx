import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { Footer } from '@/components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ivi-clone</title>
        <meta name="description" content="Ivi clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Footer />
      </main>
    </>
  );
};
export default Home;
