import { MAIN_ROUTE, FILMS_ROUTE } from '../constants/routes';

export interface INavbarLink {
  title: string;
  titleEng: string;
  link: string;
  section?: 'movies' | 'serials' | 'cartoons' | 'tv+';
}

export const navbarLinks: INavbarLink[] = [
  { title: 'Мой Иви', titleEng: 'My Ivi', link: MAIN_ROUTE },
  { title: 'Что нового', titleEng: "What's new", link: 'https://www.ivi.ru/new' },
  { title: 'Фильмы', titleEng: 'Films', link: FILMS_ROUTE, section: 'movies' },
  { title: 'Сериалы', titleEng: 'Serials', link: FILMS_ROUTE, section: 'serials' },
  { title: 'Мультфильмы', titleEng: 'Cartoons', link: FILMS_ROUTE, section: 'cartoons' },
  { title: 'TV+', titleEng: 'TV+', link: 'https://www.ivi.ru/tvplus', section: 'tv+' },
];
