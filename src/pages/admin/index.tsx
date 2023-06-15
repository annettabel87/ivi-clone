import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/store/hooks/hooks';
import AdminGenre from '@/components/AdminGenre/AdminGenre';
import AdminFilm from '@/components/AdminFilm/AdminFilm';
import style from './admin.module.scss';

export type FormType = 'genre' | 'film';

const Admin = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.profileReducer);

  useEffect(() => {
    if (!user?.roles.includes('ADMIN')) {
      router.back();
    }
  }, []);

  const [type, setType] = useState<FormType>('genre');

  return (
    <div className={style.adminLayout}>
      <div className={style.adminLayout__header}>
        <button
          className={`${style.adminLayout__btn} ${type === 'genre' ? style.active : ''}`}
          onClick={() => setType('genre')}
        >
          Жанры
        </button>
        <button
          className={`${style.adminLayout__btn} ${type === 'film' ? style.active : ''}`}
          onClick={() => setType('film')}
        >
          Фильмы
        </button>
      </div>
      <div className={style.adminLayout__content}>
        {type === 'genre' ? <AdminGenre /> : <AdminFilm />}
      </div>
    </div>
  );
};
export default Admin;
