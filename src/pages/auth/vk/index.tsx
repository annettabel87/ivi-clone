import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MAIN_ROUTE, PROFILE_ROUTE } from '@/shared/constants/routes';
import { useAppDispatch } from '@/store/hooks/hooks';
import { loginUserVK } from '@/store/reducers/authReducer';
import { getUser } from '@/store/reducers/profileReducer';
import styles from './style.module.scss';

const VkPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  console.log(router.query.code);
  useEffect(() => {
    if (router.query.code) {
      const code = router.query.code as string;
      dispatch(loginUserVK(code))
        .then(() => {
          dispatch(getUser()).then((res) => {
            console.log(res);
            router.push(MAIN_ROUTE);
          });
        })
        .catch(() => router.push(PROFILE_ROUTE));
    }
  }, [router.query]);

  return <div className={styles.loading}>Авторизация VK</div>;
};

export default VkPage;
