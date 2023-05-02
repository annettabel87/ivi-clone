import FilmItem from "./filmItem/filmitem";
import { IFilm } from '../personFilmography';

interface IFilmListProps {
  filmArray: Array<IFilm>;
}
const FilmList = ({ filmArray }: IFilmListProps) => {
  return (
    <div>
      {filmArray.map((item) => (
        <FilmItem film={item} />
      ))}
    </div>
  );
};

export default FilmList;
