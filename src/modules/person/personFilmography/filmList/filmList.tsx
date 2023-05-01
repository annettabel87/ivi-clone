import FilmItem from "./filmItem/filmitem";

const FilmList = ({ filmArray }) => {
  return (
    <div>
      {filmArray.map((item) => (
        <FilmItem film={item} />
      ))}
    </div>
  );
};

export default FilmList;
