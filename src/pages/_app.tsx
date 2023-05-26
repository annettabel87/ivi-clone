import { Provider } from 'react-redux';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { createReduxStore } from '@/store/store';
import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={createReduxStore()}>
      <Component {...pageProps} />
      <MobileNavigation />
      <div id="portal"></div>
    </Provider>
  );
};
export default App;
