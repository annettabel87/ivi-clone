import { useEffect, useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './AdminFilm.module.scss';
import { IFilm } from '@/shared/Interfaces/FilmPageInterfaces';
import AdminFilmCard from './AdminFilmCard/AdminFilmCard';

const AdminFilm = () => {
  const [searchedFilm, setSearchedFilm] = useState<string>('');
  const [fetchedFilm, setFetchedFilm] = useState<IFilm[]>([]);

  useEffect(() => {
    // getFilm
    // setFetchedFilm()
  }, [searchedFilm]);

  return (
    <div className={styles.adminFilm}>
      <div className={styles.adminFilm__container}>
        <SearchInput placeholder={'фильм'} setValue={setSearchedFilm} value={searchedFilm} />
        <div className={styles.adminFilm__films}>
          {fetchedFilm.map((film) => (
            <AdminFilmCard key={film.id} {...film} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdminFilm;
