import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import '../styles/globals.scss';
import { createReduxStore } from '@/store/store';
import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';
import { Header } from '@/components/Header/Header';

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Header />
      <Component {...props} />
      <MobileNavigation />
      <div id="portal"></div>
    </Provider>
  );
};

export default App;
