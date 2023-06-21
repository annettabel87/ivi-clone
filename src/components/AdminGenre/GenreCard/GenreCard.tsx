import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { updateGenre } from '@/store/reducers/genresReducer';
import { IGenre } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './GenreCard.module.scss';

export interface IGenreCardProps {
  genre: IGenre;
}

const GenreCard: FC<IGenreCardProps> = ({ genre }) => {
  const [openGenre, setOpenGenre] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { errorGenreUpdate } = useAppSelector((state) => state.genresReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGenre>({ mode: 'onChange' });

  const updateGenreHandler: SubmitHandler<IGenre> = (data) => {
    console.log(data);
    data && dispatch(updateGenre(data));
    setOpenGenre(false);
  };

  return (
    <div className={styles.genreCard}>
      {openGenre ? (
        <form className={styles.genreCard__form} onSubmit={handleSubmit(updateGenreHandler)}>
          <label className={styles.genreCard__label}>
            <span className={styles.genreCard__inputTitle}>Жанр</span>
            <div className={styles.genreCard__inputContainer}>
              <input
                className={styles.genreCard__input}
                {...register('genre', {
                  required: 'Не может быть пустым',
                  value: genre.genre,
                })}
                type="text"
                title="genre"
              />
            </div>
            {errors?.genre && (
              <span className={styles.genreCard__error}>{errors.genre.message}</span>
            )}
          </label>
          <label className={styles.genreCard__label}>
            <span className={styles.genreCard__inputTitle}>Жанр англ.</span>
            <div className={styles.genreCard__inputContainer}>
              <input
                className={styles.genreCard__input}
                {...register('genreEng', {
                  required: 'Не может быть пустым',
                  value: genre.genreEng,
                })}
                type="text"
                title="genreEng"
              />
            </div>
            {errors?.genreEng && (
              <span className={styles.genreCard__error}>{errors.genreEng.message}</span>
            )}
          </label>
          <div className={styles.btnBlock}>
            <button className={styles.okBtn} type="submit" />
            <button className={styles.cancelBtn} onClick={() => setOpenGenre(false)} />
          </div>
          <span className={styles.genreCard__error}>{errorGenreUpdate}</span>{' '}
        </form>
      ) : (
        <div className={styles.genreCard__info}>
          <p>{genre.genre}</p>
          <p>{genre.genreEng}</p>
          <button className={styles.genreCard__editBtn} onClick={() => setOpenGenre(true)} />
        </div>
      )}
    </div>
  );
};

export default GenreCard;
