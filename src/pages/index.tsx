import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Carousel } from '@/components/Carousel/Carousel';

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
        <Header />
        <Carousel> </Carousel>
        <Footer />
      </main>
    </>
  );
};
export default Home;
