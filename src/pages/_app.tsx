import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { useEffect } from 'react';
import { localStorageActions } from '@/utils/localStorageActions';
import { useAppDispatch } from '@/store/hooks/hooks';
import { getUser } from '@/store/reducers/profileReducer';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorageActions.getToken();
    if (token) {
      dispatch(getUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <>
        <Component {...props} />
        <div id="portal"></div>
      </>
    </Provider>
  );
};

export default wrapper.withRedux(App);
