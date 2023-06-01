import { useEffect, useState } from 'react';
import AuthForm from '@/components/AuthForm/AuthForm';
import { localStorageActions } from '@/utils/localStorageActions';
import { useRouter } from 'next/router';
import style from './auth.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';

export type AuthFormType = 'login' | 'registration';

const Auth = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.profileReducer);

  useEffect(() => {
    if (user) {
      router.back();
    }
  });

  const [type, setType] = useState<AuthFormType>('login');
  return (
    <div className={style.authLayout}>
      <div className={style.authLayout__header}>
        <button
          className={`${style.authLayout__btn} ${type === 'login' ? style.active : ''}`}
          onClick={() => setType('login')}
        >
          Авторизация
        </button>
        <button
          className={`${style.authLayout__btn} ${type === 'registration' ? style.active : ''}`}
          onClick={() => setType('registration')}
        >
          Регистрация
        </button>
      </div>
      <div className={style.authLayout__content}>
        <AuthForm type={type} />
      </div>
    </div>
  );
};

export default Auth;
