import { SETTINGS_PROFILE_ROUTE, HELP_PROFILE_ROUTE } from '../constants/profileRoutes';
import { ILinks } from '../footerLinks/footerLinks';

export const unauthorizedProfileLinks: ILinks[] = [
  { title: 'Настройки', link: SETTINGS_PROFILE_ROUTE },
  { title: 'Помощь', link: HELP_PROFILE_ROUTE },
];
