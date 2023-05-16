import { ILinks } from '../Interfaces/ILinks';
import { FILMS_ROUTE } from '../constants/routes';

export const cartoonsGenresLinks: ILinks[] = [
  { title: 'Аниме', titleEng: 'Anime', link: FILMS_ROUTE + '/anime' },
  { title: 'Боевик', titleEng: 'Action', link: FILMS_ROUTE + '/action' },
  { title: 'Детективы', titleEng: 'Detective', link: FILMS_ROUTE + '/detective' },
  { title: 'Для взрослых', titleEng: 'For adults', link: FILMS_ROUTE + '/adult' },
  { title: 'Для всей семьи', titleEng: 'For the family', link: FILMS_ROUTE + '/family' },
  { title: 'Для детей', titleEng: 'For children', link: FILMS_ROUTE + '/children' },
  { title: 'Драмы', titleEng: 'Drama', link: FILMS_ROUTE + '/drama' },
  { title: 'История', titleEng: 'Historical', link: FILMS_ROUTE + '/history' },
  { title: 'Комедия', titleEng: 'Comedy', link: FILMS_ROUTE + '/comedy' },
  { title: 'Криминал', titleEng: 'Crime', link: FILMS_ROUTE + '/crime' },
  { title: 'Мюзикл', titleEng: 'Musical', link: FILMS_ROUTE + '/musical' },
  { title: 'Полнометражный', titleEng: 'Full length', link: FILMS_ROUTE + '/full-length' },
  { title: 'Приключения', titleEng: 'Adventure', link: FILMS_ROUTE + '/adventure' },
  { title: 'Развивающие', titleEng: 'Educational', link: FILMS_ROUTE + '/educational' },
  { title: 'Сериалы', titleEng: 'Serials', link: FILMS_ROUTE + '/serials' },
  { title: 'Спорт', titleEng: 'Sport', link: FILMS_ROUTE + '/sport' },
  { title: 'Триллеры', titleEng: 'Thriller', link: FILMS_ROUTE + '/thriller' },
  { title: 'Ужасы', titleEng: 'Horror', link: FILMS_ROUTE + '/horror' },
  { title: 'Фантастика', titleEng: 'Fantastic', link: FILMS_ROUTE + '/fantastic' },
  { title: 'Фэнтези', titleEng: 'Fantasy', link: FILMS_ROUTE + '/fantasy' },
];

export const cartoonsByCountriesLinks: ILinks[] = [
  { title: 'Советские', titleEng: 'Soviet', link: FILMS_ROUTE + '/su' },
  { title: 'Русские', titleEng: 'Russian', link: FILMS_ROUTE + '/ru' },
  { title: 'Американские', titleEng: 'American', link: FILMS_ROUTE + '/us' },
  { title: 'Зарубежные', titleEng: 'Foreign', link: FILMS_ROUTE + '/foreign' },
];

export const cartoonsByYearLinks: ILinks[] = [
  { title: 'Мультики 2023 года', titleEng: 'Cartoons of 2023', link: FILMS_ROUTE + '/2023' },
  { title: 'Мультики 2022 года', titleEng: 'Cartoons of 2022', link: FILMS_ROUTE + '/2022' },
  { title: 'Мультики 2021 года', titleEng: 'Cartoons of 2021', link: FILMS_ROUTE + '/2021' },
  { title: 'Мультики 2020 года', titleEng: 'Cartoons of 2020', link: FILMS_ROUTE + '/2020' },
];

export const cartoonsAdditionalLinks: ILinks[] = [
  { title: 'Новинки', titleEng: 'New cartoons', link: 'https://www.ivi.ru/new/animation-new' },
  {
    title: 'Мультики в HD',
    titleEng: 'HD cartoons',
    link: 'https://www.ivi.ru/collections/cartoons-hd',
  },
  {
    title: 'Развивайся с Иви',
    titleEng: 'Education with Ivi',
    link: 'https://www.ivi.ru/collections/razvivajsya-vmeste-s-ivi',
  },
  {
    title: 'Мультфильмы Paramount Play',
    titleEng: 'Paramount Play cartoons',
    link: 'https://www.ivi.ru/collections/animation-paramount-play',
  },
  {
    title: 'Мультфильмы Dreamworks',
    titleEng: 'Dreamworks cartoons',
    link: 'https://www.ivi.ru/collections/dreamworks-cartoons',
  },
  {
    title: 'Мультфильмы CTC Kids',
    titleEng: 'CTC Kids cartoons',
    link: 'https://www.ivi.ru/collections/ctc-kids',
  },
];
