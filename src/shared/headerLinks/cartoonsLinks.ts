import { ILinks } from '../Interfaces/ILinks';
import { CARTOONS_ROUTE } from '../constants/routes';

export const cartoonsGenresLinks: ILinks[] = [
  { title: 'Аниме', titleEng: 'Anime', link: CARTOONS_ROUTE + '/anime' },
  { title: 'Боевик', titleEng: 'Action', link: CARTOONS_ROUTE + '/action' },
  { title: 'Детективы', titleEng: 'Detective', link: CARTOONS_ROUTE + '/detective' },
  { title: 'Для взрослых', titleEng: 'For adults', link: CARTOONS_ROUTE + '/adult' },
  { title: 'Для всей семьи', titleEng: 'For the family', link: CARTOONS_ROUTE + '/family' },
  { title: 'Для детей', titleEng: 'For children', link: CARTOONS_ROUTE + '/children' },
  { title: 'Драмы', titleEng: 'Drama', link: CARTOONS_ROUTE + '/drama' },
  { title: 'История', titleEng: 'Historical', link: CARTOONS_ROUTE + '/history' },
  { title: 'Комедия', titleEng: 'Comedy', link: CARTOONS_ROUTE + '/comedy' },
  { title: 'Криминал', titleEng: 'Crime', link: CARTOONS_ROUTE + '/crime' },
  { title: 'Мюзикл', titleEng: 'Musical', link: CARTOONS_ROUTE + '/musical' },
  { title: 'Полнометражный', titleEng: 'Full length', link: CARTOONS_ROUTE + '/full-length' },
  { title: 'Приключения', titleEng: 'Adventure', link: CARTOONS_ROUTE + '/adventure' },
  { title: 'Развивающие', titleEng: 'Educational', link: CARTOONS_ROUTE + '/educational' },
  { title: 'Сериалы', titleEng: 'Serials', link: CARTOONS_ROUTE + '/serials' },
  { title: 'Спорт', titleEng: 'Sport', link: CARTOONS_ROUTE + '/sport' },
  { title: 'Триллеры', titleEng: 'Thriller', link: CARTOONS_ROUTE + '/thriller' },
  { title: 'Ужасы', titleEng: 'Horror', link: CARTOONS_ROUTE + '/horror' },
  { title: 'Фантастика', titleEng: 'Fantastic', link: CARTOONS_ROUTE + '/fantastic' },
  { title: 'Фэнтези', titleEng: 'Fantasy', link: CARTOONS_ROUTE + '/fantasy' },
];

export const cartoonsByCountriesLinks: ILinks[] = [
  { title: 'Советские', titleEng: 'Soviet', link: CARTOONS_ROUTE + '/su' },
  { title: 'Русские', titleEng: 'Russian', link: CARTOONS_ROUTE + '/ru' },
  { title: 'Американские', titleEng: 'American', link: CARTOONS_ROUTE + '/us' },
  { title: 'Зарубежные', titleEng: 'Foreign', link: CARTOONS_ROUTE + '/foreign' },
];

export const cartoonsByYearLinks: ILinks[] = [
  { title: 'Мультики 2023 года', titleEng: 'Cartoons of 2023', link: CARTOONS_ROUTE + '/2023' },
  { title: 'Мультики 2022 года', titleEng: 'Cartoons of 2022', link: CARTOONS_ROUTE + '/2022' },
  { title: 'Мультики 2021 года', titleEng: 'Cartoons of 2021', link: CARTOONS_ROUTE + '/2021' },
  { title: 'Мультики 2020 года', titleEng: 'Cartoons of 2020', link: CARTOONS_ROUTE + '/2020' },
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
