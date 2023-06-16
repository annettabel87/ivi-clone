import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import styles from './AdminGenre.module.scss';
import { useEffect, useState } from 'react';
import genresReducer, { getGenres } from '@/store/reducers/genresReducer';
import { IGenre } from '@/shared/Interfaces/FilmPageInterfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import GenreCard from './GenreCard/CenreCard';

const genres: IGenre[] = [
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
  const [allGenres, setAllGenres] = useState<IGenre[]>(genres);

  useEffect(() => {
    const getAllGenres = async () => {
      //const allGenre = await dispatch(getGenres());
      //   if (allGenre !== undefined) {
      //     setAllGenres(allGenre);
      //   }
     // console.log(allGenre);
    };

    getAllGenres();
  }, []);

  return (
    <div className={styles.adminGenre}>
      <div className={styles.adminGenre__container}>
        <div className={styles.cardField}>
          {allGenres && allGenres.map((genre) => <GenreCard key={genre.genre} genre={genre} />)}
        </div>
      </div>
    </div>
  );
};
export default AdminGenre;
