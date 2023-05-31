import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MAIN_ROUTE, PROFILE_ROUTE } from '@/shared/constants/routes';
import { useAppDispatch } from '@/store/hooks/hooks';
import { loginUserGoogle } from '@/store/reducers/authReducer';
import { getUser } from '@/store/reducers/profileReducer';
import styles from './style.module.scss';

const GooglePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (router.query.code) {
      const code = router.query.code as string;
      dispatch(loginUserGoogle(decodeURI(code)))
        .then(() => {
          dispatch(getUser()).then(() => {
            router.push(MAIN_ROUTE);
          });
        })
        .catch(() => {
          router.push(PROFILE_ROUTE);
        });
    }
  }, [router.query]);

  return <div className={styles.loading}>Авторизация google</div>;
};

export default GooglePage;
