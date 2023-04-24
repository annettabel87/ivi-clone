import { ILinks } from '../Interfaces/ILinks';
import { FILMS_ROUTE } from '../constants/routes';

export const serialsGenresLinks: ILinks[] = [
  { title: 'Биография', titleEng: 'Art house', link: FILMS_ROUTE + '/biography' },
  { title: 'Боевики', titleEng: 'Action', link: FILMS_ROUTE + '/action' },
  { title: 'Военные', titleEng: 'War', link: FILMS_ROUTE + '/war' },
  { title: 'Детективы', titleEng: 'Detective', link: FILMS_ROUTE + '/detective' },
  { title: 'Для всей семьи', titleEng: 'For the family', link: FILMS_ROUTE + '/family' },
  { title: 'Документальные', titleEng: 'Documentary', link: FILMS_ROUTE + '/documentary' },
  { title: 'Дорамы', titleEng: 'Dorama', link: FILMS_ROUTE + '/dorama' },
  { title: 'Драмы', titleEng: 'Drama', link: FILMS_ROUTE + '/drama' },
  { title: 'Исторические', titleEng: 'Historical', link: FILMS_ROUTE + '/history' },
  { title: 'Комедии', titleEng: 'Comedy', link: FILMS_ROUTE + '/comedy' },
  { title: 'Криминал', titleEng: 'Crime', link: FILMS_ROUTE + '/crime' },
  { title: 'Медицинские', titleEng: 'Medicine', link: FILMS_ROUTE + '/medicine' },
  { title: 'Мелодрамы', titleEng: 'Melodrama', link: FILMS_ROUTE + '/melodrama' },
  { title: 'Мистические', titleEng: 'Mystical', link: FILMS_ROUTE + '/mystical' },
  { title: 'Приключения', titleEng: 'Adventure', link: FILMS_ROUTE + '/adventure' },
  { title: 'Романтические', titleEng: 'Romantic', link: FILMS_ROUTE + '/romantic' },
  { title: 'Телешоу', titleEng: 'TV show', link: FILMS_ROUTE + '/tv-show' },
  { title: 'Триллеры', titleEng: 'Thriller', link: FILMS_ROUTE + '/thriller' },
  { title: 'Турецкие', titleEng: 'Turkish', link: FILMS_ROUTE + '/tr' },
  { title: 'Ужасы', titleEng: 'Horror', link: FILMS_ROUTE + '/horror' },
  { title: 'Фантастика', titleEng: 'Fantastic', link: FILMS_ROUTE + '/fantastic' },
  { title: 'Фэнтези', titleEng: 'Fantasy', link: FILMS_ROUTE + '/fantasy' },
];

export const serialsByCountriesLinks: ILinks[] = [
  { title: 'Русские', titleEng: 'Russian', link: FILMS_ROUTE + '/ru' },
  { title: 'Зарубежные', titleEng: 'Foreign', link: FILMS_ROUTE + '/foreign' },
  { title: 'Американские', titleEng: 'American', link: FILMS_ROUTE + '/us' },
  { title: 'Украинские', titleEng: 'Ukraine', link: FILMS_ROUTE + '/ua' },
  { title: 'Корейские', titleEng: 'Korean', link: FILMS_ROUTE + '/kr' },
  { title: 'Турецкие', titleEng: 'Turkish', link: FILMS_ROUTE + '/tr' },
];

export const serialsByYearLinks: ILinks[] = [
  { title: 'Сериалы 2023 года', titleEng: 'Serials of 2023', link: FILMS_ROUTE + '/2023' },
  { title: 'Сериалы 2022 года', titleEng: 'Serials of 2022', link: FILMS_ROUTE + '/2022' },
  { title: 'Сериалы 2021 года', titleEng: 'Serials of 2021', link: FILMS_ROUTE + '/2021' },
  { title: 'Сериалы 2020 года', titleEng: 'Serials of 2020', link: FILMS_ROUTE + '/2020' },
];

export const serialsAdditionalLinks: ILinks[] = [
  { title: 'Новинки', titleEng: 'New serials', link: 'https://www.ivi.ru/new/series-new' },
  {
    title: 'Иви.Рейтинг',
    titleEng: 'Ivi.Rating',
    link: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
  },
  {
    title: 'Сериалы в HD',
    titleEng: 'HD serials',
    link: 'https://www.ivi.ru/collections/series-hd',
  },
  {
    title: 'Сериалы Amediateka',
    titleEng: 'Amediateka serials',
    link: 'https://www.ivi.ru/collections/serialyi-amediateka',
  },
  {
    title: 'Сериалы Иви',
    titleEng: 'Ivi serials',
    link: 'https://www.ivi.ru/collections/ivi-originals',
  },
  {
    title: 'Сериалы Paramount Play',
    titleEng: 'Paramount Play serials',
    link: 'https://www.ivi.ru/collections/series-paramount-play',
  },
];
