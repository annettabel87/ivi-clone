import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { wrapper } from '@/store/store';
import { setUser } from '@/store/reducers/profileReducer';
import { userApi } from '@/api/api';
import styles from '../styles/Home.module.scss';

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
        <Footer />
      </main>
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { authToken } = parseCookies(ctx);
    try {
      const data = await userApi.getUser(authToken);
      store.dispatch(setUser(data));
    } catch (error) {
      console.log(error);
    }

    return { props: {} };
  }
);
