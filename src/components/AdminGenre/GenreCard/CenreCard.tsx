import { IGenre } from '@/shared/Interfaces/FilmPageInterfaces';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './GenreCard.module.scss';

export interface IGenreCardProps {
  genre: IGenre;
}

const GenreCard: FC<IGenreCardProps> = ({ genre }) => {
  const [openGenre, setOpenGenre] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGenre>();

  const updateGenre = handleSubmit((data: IGenre) => {
    console.log(data);
    setOpenGenre(false);
  });

  return (
    <div className={styles.genreCard}>
      {openGenre ? (
        <form className={styles.genreCard__form} onSubmit={updateGenre}>
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
