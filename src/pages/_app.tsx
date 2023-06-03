import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';
import '../styles/globals.scss';
import { parseCookies } from 'nookies';
import { userApi } from '@/api/api';
import { setUser } from '@/store/reducers/authReducer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      {/* <TabBar /> */}
      <div id="portal"></div>
    </>
  );
};
App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  const { authToken } = parseCookies(ctx);
  try {
    const data = await userApi.getUser(authToken);
    store.dispatch(setUser(data));
  } catch (error) {
    console.log(error);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});
export default wrapper.withRedux(App);
