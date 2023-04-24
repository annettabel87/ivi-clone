import { ILinks } from '../Interfaces/ILinks';
import { FILMS_ROUTE } from '../constants/routes';

export const filmsGenresLinks: ILinks[] = [
  { title: 'Артхаус', titleEng: 'Art house', link: FILMS_ROUTE + '/arthouse' },
  { title: 'Боевики', titleEng: 'Action', link: FILMS_ROUTE + '/action' },
  { title: 'Вестерн', titleEng: 'Western', link: FILMS_ROUTE + '/western' },
  { title: 'Военные', titleEng: 'War', link: FILMS_ROUTE + '/war' },
  { title: 'Детективы', titleEng: 'Detective', link: FILMS_ROUTE + '/detective' },
  { title: 'Для всей семьи', titleEng: 'For the family', link: FILMS_ROUTE + '/family' },
  { title: 'Для детей', titleEng: 'For children', link: FILMS_ROUTE + '/children' },
  { title: 'Документальные', titleEng: 'Documentary', link: FILMS_ROUTE + '/documentary' },
  { title: 'Драмы', titleEng: 'Drama', link: FILMS_ROUTE + '/drama' },
  { title: 'Исторические', titleEng: 'Historical', link: FILMS_ROUTE + '/history' },
  { title: 'Катастрофы', titleEng: 'Catastrophe', link: FILMS_ROUTE + '/catastrophe' },
  { title: 'Комедии', titleEng: 'Comedy', link: FILMS_ROUTE + '/comedy' },
  { title: 'Криминал', titleEng: 'Crime', link: FILMS_ROUTE + '/crime' },
  { title: 'Мелодрамы', titleEng: 'Melodrama', link: FILMS_ROUTE + '/melodrama' },
  { title: 'Мистические', titleEng: 'Mystical', link: FILMS_ROUTE + '/mystical' },
  { title: 'По комиксам', titleEng: 'Comics', link: FILMS_ROUTE + '/comics' },
  { title: 'Приключения', titleEng: 'Adventure', link: FILMS_ROUTE + '/adventure' },
  { title: 'Спорт', titleEng: 'Sport', link: FILMS_ROUTE + '/sport' },
  { title: 'Триллеры', titleEng: 'Thriller', link: FILMS_ROUTE + '/thriller' },
  { title: 'Ужасы', titleEng: 'Horror', link: FILMS_ROUTE + '/horror' },
  { title: 'Фантастика', titleEng: 'Fantastic', link: FILMS_ROUTE + '/fantastic' },
  { title: 'Фэнтези', titleEng: 'Fantasy', link: FILMS_ROUTE + '/fantasy' },
];

export const filmsByCountriesLinks: ILinks[] = [
  { title: 'Русские', titleEng: 'Russian', link: FILMS_ROUTE + '/ru' },
  { title: 'Зарубежные', titleEng: 'Foreign', link: FILMS_ROUTE + '/foreign' },
  { title: 'Советские', titleEng: 'Soviet', link: FILMS_ROUTE + '/su' },
];

export const filmsByYearLinks: ILinks[] = [
  { title: 'Фильмы 2023 года', titleEng: 'Films of 2023', link: FILMS_ROUTE + '/2023' },
  { title: 'Фильмы 2022 года', titleEng: 'Films of 2022', link: FILMS_ROUTE + '/2022' },
  { title: 'Фильмы 2021 года', titleEng: 'Films of 2021', link: FILMS_ROUTE + '/2021' },
  { title: 'Фильмы 2020 года', titleEng: 'Films of 2020', link: FILMS_ROUTE + '/2020' },
];

export const filmsAdditionalLinks: ILinks[] = [
  { title: 'Новинки', titleEng: 'New films', link: 'https://www.ivi.ru/new/movie-new' },
  { title: 'Подборки', titleEng: 'Collections', link: 'https://www.ivi.ru/collections' },
  {
    title: 'Иви.Рейтинг',
    titleEng: 'Ivi.Rating',
    link: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
  },
  { title: 'Скоро на Иви', titleEng: 'Collections', link: 'https://www.ivi.ru/new/soon-ivi' },
  { title: 'Трейлеры', titleEng: 'Trailers', link: 'https://www.ivi.ru/trailers' },
  { title: 'Что посмотреть', titleEng: 'What to see', link: 'https://www.ivi.ru/goodmovies' },
  {
    title: 'Фильмы в HD',
    titleEng: 'HD films',
    link: 'https://www.ivi.ru/collections/movies-hd',
  },
  {
    title: 'Выбор Иви',
    titleEng: 'Ivi choice',
    link: 'https://www.ivi.ru/collections/vyibor-ivi',
  },
  {
    title: 'Новинки подписки',
    titleEng: 'New of subscriptions',
    link: 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection',
  },
  {
    title: 'Фильмы Amediateka',
    titleEng: 'Amediateka films',
    link: 'https://www.ivi.ru/collections/filmyi-amediateka',
  },
  {
    title: 'Фильмы Иви',
    titleEng: 'Ivi films',
    link: 'https://www.ivi.ru/collections/ivi-originals',
  },
  {
    title: 'Популярные фильмы',
    titleEng: 'Popular films',
    link: 'https://www.ivi.ru/collections/best-movies',
  },
];
