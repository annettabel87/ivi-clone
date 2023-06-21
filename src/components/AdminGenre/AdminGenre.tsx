import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { useEffect, useState } from 'react';
import { getGenres } from '@/store/reducers/genresReducer';
import { IGenre } from '@/shared/Interfaces/FilmPageInterfaces';
import GenreCard from './GenreCard/GenreCard';
import SearchInput from '../SearchInput/SearchInput';
import styles from './AdminGenre.module.scss';

const allGenres: IGenre[] = [
  { genre: 'аниме', genreEng: 'anime' },
  { genre: 'биография', genreEng: 'biography' },
  { genre: 'боевик', genreEng: 'action movie' },
  { genre: 'вестерн', genreEng: 'western' },
  { genre: 'военный', genreEng: 'military' },
  { genre: 'детектив', genreEng: 'detective' },
  { genre: 'детский', genreEng: 'children' },
];

const AdminGenre = () => {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresReducer);
  const [filteredGenres, setFilteredGenres] = useState<IGenre[]>(genres);
  const [searchedGenre, setSearchedGenre] = useState<string>('');
  const { errorGenres } = useAppSelector((state) => state.genresReducer);

  useEffect(() => {
    const getAllGenres = async () => {
      await dispatch(getGenres());
    };
    getAllGenres();
  }, [dispatch]);

  useEffect(() => {
    const filteredGenres = allGenres.filter(
      (genre) =>
        genre.genre.toLowerCase().includes(searchedGenre) ||
        genre.genreEng.toLowerCase().includes(searchedGenre)
    );
    setFilteredGenres(filteredGenres);
  }, [searchedGenre]);

  return (
    <div className={styles.adminGenre}>
      <div className={styles.adminGenre__container}>
        <SearchInput placeholder={'жанр'} setValue={setSearchedGenre} value={searchedGenre} />
        <div className={styles.cardField}>
          {allGenres &&
            filteredGenres.map((genre) => <GenreCard key={genre.genre} genre={genre} />)}
        </div>
        <span className={styles.error}>{errorGenres}</span>
      </div>
    </div>
  );
};
export default AdminGenre;
