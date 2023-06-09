import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import '../styles/globals.scss';
import { createReduxStore } from '@/store/store';
import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const router = useRouter();
  const isAuthPage = router.pathname.includes('auth');
  return (
    <Provider store={store}>
      <Header />
      <Component {...props} />
      {!isAuthPage && <Footer />}
      <MobileNavigation />
      <div id="portal"></div>
    </Provider>
  );
};

export default App;
