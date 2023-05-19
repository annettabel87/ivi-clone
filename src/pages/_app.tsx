import { Provider } from 'react-redux';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { createReduxStore } from '@/store/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={createReduxStore()}>
      <Component {...pageProps} />
      <div id="portal"></div>
    </Provider>
  );
};
export default App;
