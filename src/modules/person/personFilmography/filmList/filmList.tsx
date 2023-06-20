import FilmItem from './filmItem/filmItem';
import { IFilm } from '../personFilmography';
import { FC } from 'react';

interface IFilmListProps {
  filmArray: Array<IFilm>;
}
const FilmList: FC<IFilmListProps> = ({ filmArray }) => {
  return (
    <div>
      {filmArray.map((item) => (
        <FilmItem key={item.filmId} film={item} />
      ))}
    </div>
  );
};

export default FilmList;
