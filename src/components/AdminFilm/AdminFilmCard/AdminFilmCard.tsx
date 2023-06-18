import { FC, useState } from 'react';
import { IFilm } from '@/shared/Interfaces/FilmPageInterfaces';
import styles from './AdminFilmCard.module.scss';
import { useForm } from 'react-hook-form';

interface ITitleFilm {
  movieName: string;
  originalName: string;
}
const AdminFilmCard: FC<IFilm> = ({ movieName, originalName, year, id }) => {
  const [openFilm, setOpenFilm] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitleFilm>();

  const updateFilm = handleSubmit((data: ITitleFilm) => {
    console.log(data);
    setOpenFilm(false);
  });

  return (
    <div className={styles.adminFilmCard}>
      {openFilm ? (
        <form className={styles.adminFilmCard__form} onSubmit={updateFilm}>
          <label className={styles.adminFilmCard__label}>
            <span className={styles.adminFilmCard__inputTitle}>Жанр</span>
            <div className={styles.adminFilmCard__inputContainer}>
              <input
                className={styles.adminFilmCard__input}
                {...register('movieName', {
                  required: 'Не может быть пустым',
                  value: movieName,
                })}
                type="text"
                title="movieName"
              />
            </div>
            {errors?.movieName && (
              <span className={styles.adminFilmCard__error}>{errors.movieName.message}</span>
            )}
          </label>
          <label className={styles.adminFilmCard__label}>
            <span className={styles.adminFilmCard__inputTitle}>Жанр англ.</span>
            <div className={styles.adminFilmCard__inputContainer}>
              <input
                className={styles.adminFilmCard__input}
                {...register('originalName', {
                  required: 'Не может быть пустым',
                  value: originalName,
                })}
                type="text"
                title="originalName"
              />
            </div>
            {errors?.originalName && (
              <span className={styles.adminFilmCard__error}>{errors.originalName.message}</span>
            )}
          </label>
          <div className={styles.btnBlock}>
            <button className={styles.okBtn} type="submit" />
            <button className={styles.cancelBtn} onClick={() => setOpenFilm(false)} />
          </div>
        </form>
      ) : (
        <div className={styles.adminFilmCard__info}>
          <p>{movieName}</p>
          <p>{originalName}</p>
          <p>{year}</p>
          <button className={styles.adminFilmCard__editBtn} onClick={() => setOpenFilm(true)} />
        </div>
      )}
    </div>
  );
};

export default AdminFilmCard;
