import { ILinks } from '../Interfaces/ILinks';
import { SERIALS_ROUTE } from '../constants/routes';

export const serialsGenresLinks: ILinks[] = [
  { title: 'Биография', titleEng: 'Art house', link: SERIALS_ROUTE + '/biography' },
  { title: 'Боевики', titleEng: 'Action', link: SERIALS_ROUTE + '/action' },
  { title: 'Военные', titleEng: 'War', link: SERIALS_ROUTE + '/war' },
  { title: 'Детективы', titleEng: 'Detective', link: SERIALS_ROUTE + '/detective' },
  { title: 'Для всей семьи', titleEng: 'For the family', link: SERIALS_ROUTE + '/family' },
  { title: 'Документальные', titleEng: 'Documentary', link: SERIALS_ROUTE + '/documentary' },
  { title: 'Дорамы', titleEng: 'Dorama', link: SERIALS_ROUTE + '/dorama' },
  { title: 'Драмы', titleEng: 'Drama', link: SERIALS_ROUTE + '/drama' },
  { title: 'Исторические', titleEng: 'Historical', link: SERIALS_ROUTE + '/history' },
  { title: 'Комедии', titleEng: 'Comedy', link: SERIALS_ROUTE + '/comedy' },
  { title: 'Криминал', titleEng: 'Crime', link: SERIALS_ROUTE + '/crime' },
  { title: 'Медицинские', titleEng: 'Medicine', link: SERIALS_ROUTE + '/medicine' },
  { title: 'Мелодрамы', titleEng: 'Melodrama', link: SERIALS_ROUTE + '/melodrama' },
  { title: 'Мистические', titleEng: 'Mystical', link: SERIALS_ROUTE + '/mystical' },
  { title: 'Приключения', titleEng: 'Adventure', link: SERIALS_ROUTE + '/adventure' },
  { title: 'Романтические', titleEng: 'Romantic', link: SERIALS_ROUTE + '/romantic' },
  { title: 'Телешоу', titleEng: 'TV show', link: SERIALS_ROUTE + '/tv-show' },
  { title: 'Триллеры', titleEng: 'Thriller', link: SERIALS_ROUTE + '/thriller' },
  { title: 'Турецкие', titleEng: 'Turkish', link: SERIALS_ROUTE + '/tr' },
  { title: 'Ужасы', titleEng: 'Horror', link: SERIALS_ROUTE + '/horror' },
  { title: 'Фантастика', titleEng: 'Fantastic', link: SERIALS_ROUTE + '/fantastic' },
  { title: 'Фэнтези', titleEng: 'Fantasy', link: SERIALS_ROUTE + '/fantasy' },
];

export const serialsByCountriesLinks: ILinks[] = [
  { title: 'Русские', titleEng: 'Russian', link: SERIALS_ROUTE + '/ru' },
  { title: 'Зарубежные', titleEng: 'Foreign', link: SERIALS_ROUTE + '/foreign' },
  { title: 'Американские', titleEng: 'American', link: SERIALS_ROUTE + '/us' },
  { title: 'Украинские', titleEng: 'Ukraine', link: SERIALS_ROUTE + '/ua' },
  { title: 'Корейские', titleEng: 'Korean', link: SERIALS_ROUTE + '/kr' },
  { title: 'Турецкие', titleEng: 'Turkish', link: SERIALS_ROUTE + '/tr' },
];

export const serialsByYearLinks: ILinks[] = [
  { title: 'Сериалы 2023 года', titleEng: 'Serials of 2023', link: SERIALS_ROUTE + '/2023' },
  { title: 'Сериалы 2022 года', titleEng: 'Serials of 2022', link: SERIALS_ROUTE + '/2022' },
  { title: 'Сериалы 2021 года', titleEng: 'Serials of 2021', link: SERIALS_ROUTE + '/2021' },
  { title: 'Сериалы 2020 года', titleEng: 'Serials of 2020', link: SERIALS_ROUTE + '/2020' },
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
