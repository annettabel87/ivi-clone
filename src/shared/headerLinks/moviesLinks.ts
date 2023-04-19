import { ILinks } from '../footerLinks/footerLinks';
import {
  ART_HOUSE_MOVIES_ROUTE,
  ACTION_MOVIES_ROUTE,
  WESTERN_MOVIES_ROUTE,
  MILITARY_MOVIES_ROUTE,
  DETECTIVE_MOVIES_ROUTE,
  CHILDREN_MOVIES_ROUTE,
  DOCUMENTARY_MOVIES_ROUTE,
  DRAMA_MOVIES_ROUTE,
  FOREIGN_MOVIES_ROUTE,
  HISTORY_MOVIES_ROUTE,
  CATASTROPHE_MOVIES_ROUTE,
  COMEDY_MOVIES_ROUTE,
  CRIME_MOVIES_ROUTE,
  MELODRAMA_MOVIES_ROUTE,
  MYSTICAL_MOVIES_ROUTE,
  COMICS_MOVIES_ROUTE,
  ADVENTURE_MOVIES_ROUTE,
  RUSSIAN_MOVIES_ROUTE,
  FAMILY_MOVIES_ROUTE,
  SOVIET_MOVIES_ROUTE,
  SPORT_MOVIES_ROUTE,
  THRILLER_MOVIES_ROUTE,
  HORROR_MOVIES_ROUTE,
  FANTASTIC_MOVIES_ROUTE,
  FANTASY_MOVIES_ROUTE,
  Y2023_MOVIES_ROUTE,
  Y2022_MOVIES_ROUTE,
  Y2021_MOVIES_ROUTE,
  Y2020_MOVIES_ROUTE,
  AMEDIATEKA_MOVIES_ROUTE,
  COLLECTIONS_NEW_MOVIES_ROUTE,
  HD_MOVIES_ROUTE,
  IVI_CHOICE_MOVIES_ROUTE,
  IVI_MOVIES_ROUTE,
  NEW_MOVIES_ROUTE,
  NEW_OF_SUBSCRIPTIONS_MOVIES_ROUTE,
  POPULAR_MOVIES_ROUTE,
  RATING_MOVIES_ROUTE,
  SOON_MOVIES_ROUTE,
  TRAILERS_MOVIES_ROUTE,
  WHAT_TO_SEE_MOVIES_ROUTE,
} from '../constants/moviesRoutes';

export const moviesGenresLinks: ILinks[] = [
  { title: 'Артхаус', link: ART_HOUSE_MOVIES_ROUTE },
  { title: 'Боевики', link: ACTION_MOVIES_ROUTE },
  { title: 'Вестерн', link: WESTERN_MOVIES_ROUTE },
  { title: 'Военные', link: MILITARY_MOVIES_ROUTE },
  { title: 'Детективы', link: DETECTIVE_MOVIES_ROUTE },
  { title: 'Для всей семьи', link: FAMILY_MOVIES_ROUTE },
  { title: 'Для детей', link: CHILDREN_MOVIES_ROUTE },
  { title: 'Документальные', link: DOCUMENTARY_MOVIES_ROUTE },
  { title: 'Драмы', link: DRAMA_MOVIES_ROUTE },
  { title: 'Исторические', link: HISTORY_MOVIES_ROUTE },
  { title: 'Катастрофы', link: CATASTROPHE_MOVIES_ROUTE },
  { title: 'Комедии', link: COMEDY_MOVIES_ROUTE },
  { title: 'Криминал', link: CRIME_MOVIES_ROUTE },
  { title: 'Мелодрамы', link: MELODRAMA_MOVIES_ROUTE },
  { title: 'Мистические', link: MYSTICAL_MOVIES_ROUTE },
  { title: 'По комиксам', link: COMICS_MOVIES_ROUTE },
  { title: 'Приключения', link: ADVENTURE_MOVIES_ROUTE },
  { title: 'Спорт', link: SPORT_MOVIES_ROUTE },
  { title: 'Триллеры', link: THRILLER_MOVIES_ROUTE },
  { title: 'Ужасы', link: HORROR_MOVIES_ROUTE },
  { title: 'Фантастика', link: FANTASTIC_MOVIES_ROUTE },
  { title: 'Фэнтези', link: FANTASY_MOVIES_ROUTE },
];

export const moviesByCountriesLinks: ILinks[] = [
  { title: 'Русские', link: RUSSIAN_MOVIES_ROUTE },
  { title: 'Зарубежные', link: FOREIGN_MOVIES_ROUTE },
  { title: 'Советские', link: SOVIET_MOVIES_ROUTE },
];

export const moviesByYearLinks: ILinks[] = [
  { title: 'Фильмы 2023 года', link: Y2023_MOVIES_ROUTE },
  { title: 'Фильмы 2022 года', link: Y2022_MOVIES_ROUTE },
  { title: 'Фильмы 2021 года', link: Y2021_MOVIES_ROUTE },
  { title: 'Фильмы 2020 года', link: Y2020_MOVIES_ROUTE },
];

export const moviesAdditionalLinks: ILinks[] = [
  { title: 'Новинки', link: NEW_MOVIES_ROUTE },
  { title: 'Подборки', link: COLLECTIONS_NEW_MOVIES_ROUTE },
  { title: 'Иви.Рейтинг', link: RATING_MOVIES_ROUTE },
  { title: 'Скоро на Иви', link: SOON_MOVIES_ROUTE },
  { title: 'Трейлеры', link: TRAILERS_MOVIES_ROUTE },
  { title: 'Что посмотреть', link: WHAT_TO_SEE_MOVIES_ROUTE },
  { title: 'Фильмы в HD', link: HD_MOVIES_ROUTE },
  { title: 'Выбор Иви', link: IVI_CHOICE_MOVIES_ROUTE },
  { title: 'Новинки подписки', link: NEW_OF_SUBSCRIPTIONS_MOVIES_ROUTE },
  { title: 'Фильмы Amediateka', link: AMEDIATEKA_MOVIES_ROUTE },
  { title: 'Фильмы Иви', link: IVI_MOVIES_ROUTE },
  { title: 'Популярные фильмы', link: POPULAR_MOVIES_ROUTE },
];
