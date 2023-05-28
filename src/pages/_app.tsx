import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  console.log(store.getState());

  return (
    <Provider store={store}>
      <>
        <Component {...props} />
        <div id="portal"></div>
      </>
    </Provider>
  );
};

export default App;
