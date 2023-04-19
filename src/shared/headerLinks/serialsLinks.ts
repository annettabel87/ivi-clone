import { ILinks } from '../footerLinks/footerLinks';
import {
  BIOGRAPHY_SERIALS_ROUTE,
  ACTION_SERIALS_ROUTE,
  MILITARY_SERIALS_ROUTE,
  DETECTIVE_SERIALS_ROUTE,
  FAMILY_SERIALS_ROUTE,
  DOCUMENTARY_SERIALS_ROUTE,
  DORAMA_SERIALS_ROUTE,
  DRAMA_SERIALS_ROUTE,
  HISTORY_SERIALS_ROUTE,
  COMEDY_SERIALS_ROUTE,
  CRIME_SERIALS_ROUTE,
  MEDICINE_SERIALS_ROUTE,
  MELODRAMA_SERIALS_ROUTE,
  MYSTICAL_SERIALS_ROUTE,
  ADVENTURE_SERIALS_ROUTE,
  ROMANTIC_SERIALS_ROUTE,
  TV_SHOW_SERIALS_ROUTE,
  THRILLER_SERIALS_ROUTE,
  HORROR_SERIALS_ROUTE,
  FANTASTIC_SERIALS_ROUTE,
  FANTASY_SERIALS_ROUTE,
  RUSSIAN_SERIALS_ROUTE,
  FOREIGN_SERIALS_ROUTE,
  AMERICAN_SERIALS_ROUTE,
  UKRAINE_SERIALS_ROUTE,
  KOREAN_SERIALS_ROUTE,
  TURKISH_SERIALS_ROUTE,
  Y2023_SERIALS_ROUTE,
  Y2022_SERIALS_ROUTE,
  Y2021_SERIALS_ROUTE,
  Y2020_SERIALS_ROUTE,
  NEW_SERIALS_ROUTE,
  RATING_SERIALS_ROUTE,
  HD_SERIALS_ROUTE,
  AMEDIATEKA_SERIALS_ROUTE,
  IVI_SERIALS_ROUTE,
  PARAMOUNT_SERIALS_ROUTE,
} from '../constants/serialsRoutes';

export const serialsGenresLinks: ILinks[] = [
  { title: 'Биография', link: BIOGRAPHY_SERIALS_ROUTE },
  { title: 'Боевики', link: ACTION_SERIALS_ROUTE },
  { title: 'Военные', link: MILITARY_SERIALS_ROUTE },
  { title: 'Детективы', link: DETECTIVE_SERIALS_ROUTE },
  { title: 'Для всей семьи', link: FAMILY_SERIALS_ROUTE },
  { title: 'Документальные', link: DOCUMENTARY_SERIALS_ROUTE },
  { title: 'Дорамы', link: DORAMA_SERIALS_ROUTE },
  { title: 'Драмы', link: DRAMA_SERIALS_ROUTE },
  { title: 'Исторические', link: HISTORY_SERIALS_ROUTE },
  { title: 'Комедии', link: COMEDY_SERIALS_ROUTE },
  { title: 'Криминал', link: CRIME_SERIALS_ROUTE },
  { title: 'Медицинские', link: MEDICINE_SERIALS_ROUTE },
  { title: 'Мелодрамы', link: MELODRAMA_SERIALS_ROUTE },
  { title: 'Мистические', link: MYSTICAL_SERIALS_ROUTE },
  { title: 'Приключения', link: ADVENTURE_SERIALS_ROUTE },
  { title: 'Романтические', link: ROMANTIC_SERIALS_ROUTE },
  { title: 'Телешоу', link: TV_SHOW_SERIALS_ROUTE },
  { title: 'Триллеры', link: THRILLER_SERIALS_ROUTE },
  { title: 'Турецкие', link: TURKISH_SERIALS_ROUTE },
  { title: 'Ужасы', link: HORROR_SERIALS_ROUTE },
  { title: 'Фантастика', link: FANTASTIC_SERIALS_ROUTE },
  { title: 'Фэнтези', link: FANTASY_SERIALS_ROUTE },
];

export const serialsByCountriesLinks: ILinks[] = [
  { title: 'Русские', link: RUSSIAN_SERIALS_ROUTE },
  { title: 'Зарубежные', link: FOREIGN_SERIALS_ROUTE },
  { title: 'Американские', link: AMERICAN_SERIALS_ROUTE },
  { title: 'Украинские', link: UKRAINE_SERIALS_ROUTE },
  { title: 'Корейские', link: KOREAN_SERIALS_ROUTE },
  { title: 'Турецкие', link: TURKISH_SERIALS_ROUTE },
];

export const serialsByYearLinks: ILinks[] = [
  { title: 'Фильмы 2023 года', link: Y2023_SERIALS_ROUTE },
  { title: 'Фильмы 2022 года', link: Y2022_SERIALS_ROUTE },
  { title: 'Фильмы 2021 года', link: Y2021_SERIALS_ROUTE },
  { title: 'Фильмы 2020 года', link: Y2020_SERIALS_ROUTE },
];

export const serialsAdditionalLinks: ILinks[] = [
  { title: 'Новинки', link: NEW_SERIALS_ROUTE },
  { title: 'Иви.Рейтинг', link: RATING_SERIALS_ROUTE },
  { title: 'Сериалы в HD', link: HD_SERIALS_ROUTE },
  { title: 'Сериалы Amediateka', link: AMEDIATEKA_SERIALS_ROUTE },
  { title: 'Сериалы Иви', link: IVI_SERIALS_ROUTE },
  { title: 'Сериалы Paramount Play', link: PARAMOUNT_SERIALS_ROUTE },
];
