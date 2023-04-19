import { CARTOONS_ROUTE } from '../constants/cartoonsRoutes';
import { MOVIES_ROUTE } from '../constants/moviesRoutes';
import { SERIALS_ROUTE } from '../constants/serialsRoutes';
import { TV_PLUS_ROUTE } from '../constants/tvPlusRoutes';

export interface INavbarLink {
  title: string;
  link: string;
  section?: 'movies' | 'serials' | 'cartoons' | 'tv+';
}

export const navbarLinks: INavbarLink[] = [
  { title: 'Мой Иви', link: 'https://www.ivi.ru/' },
  { title: 'Что нового', link: 'https://www.ivi.ru/new' },
  { title: 'Фильмы', link: MOVIES_ROUTE, section: 'movies' },
  { title: 'Сериалы', link: SERIALS_ROUTE, section: 'serials' },
  { title: 'Мультфильмы', link: CARTOONS_ROUTE, section: 'cartoons' },
  { title: 'TV+', link: TV_PLUS_ROUTE, section: 'tv+' },
];
