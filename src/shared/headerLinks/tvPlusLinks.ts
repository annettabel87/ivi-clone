import { ILinks } from '../footerLinks/footerLinks';
import {
  TV_CHANNELS_TV_PLUS_ROUTE,
  ENTERTAINMENT_TV_PLUS_ROUTE,
  CHILDREN_TV_PLUS_ROUTE,
  SPORT_TV_PLUS_ROUTE,
  DOCUMENTARY_TV_PLUS_ROUTE,
} from '../constants/tvPlusRoutes';

export const tvPlusLinks: ILinks[] = [
  { title: 'ТВ-каналы', link: TV_CHANNELS_TV_PLUS_ROUTE },
  { title: 'Развлекательное', link: ENTERTAINMENT_TV_PLUS_ROUTE },
  { title: 'Дети', link: CHILDREN_TV_PLUS_ROUTE },
  { title: 'Спортивное ТВ', link: SPORT_TV_PLUS_ROUTE },
  { title: 'Документальное', link: DOCUMENTARY_TV_PLUS_ROUTE },
];
