import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MAIN_ROUTE, PROFILE_ROUTE } from '@/shared/constants/routes';
import { useAppDispatch } from '@/store/hooks/hooks';
import { loginUserGoogle, loginUserVK } from '@/store/reducers/authReducer';
import styles from './style.module.scss';

const GooglePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  console.log(router.query);
  useEffect(() => {
    if (router.query.code) {
      const code = router.query.code as string;
      if (router.query.id === 'google') {
        dispatch(loginUserGoogle(decodeURI(code)))
          .then(() => {
            router.push(MAIN_ROUTE);
          })
          .catch(() => {
            router.push(PROFILE_ROUTE);
          });
      }
      if (router.query.id === 'vk') {
        dispatch(loginUserVK(code))
          .then(() => {
            router.push(MAIN_ROUTE);
          })
          .catch(() => router.push(PROFILE_ROUTE));
      }
    }
  }, [router.query]);

  return <div className={styles.loading}>Авторизация google</div>;
};

export default GooglePage;
