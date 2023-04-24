import { ILinks } from '../Interfaces/ILinks';

export const unauthorizedProfileLinks: ILinks[] = [
  { title: 'Настройки', titleEng: 'Settings', link: 'https://www.ivi.ru/profile/settings' },
  {
    title: 'Помощь',
    titleEng: 'Settings',
    link: 'https://ask.ivi.ru/?_gl=1*1su3zc7*_ga*MTg0MzcwNzU1LjE2ODEyMTQ2Nzg.*_ga_GETQ4387MJ*MTY4MTkwNjIyOS4xNS4xLjE2ODE5MDkzMDIuNi4wLjA.',
  },
];

export const authorizedProfileLinks: ILinks[] = [
  {
    title: 'Редактировать профиль',
    titleEng: 'Edit profile',
    link: 'https://www.ivi.ru/profile/profile_info',
  },
  { title: 'Настройки', titleEng: 'Settings', link: 'https://www.ivi.ru/profile/settings' },
  {
    title: 'Помощь',
    titleEng: 'Help',
    link: 'https://ask.ivi.ru/?_gl=1*1su3zc7*_ga*MTg0MzcwNzU1LjE2ODEyMTQ2Nzg.*_ga_GETQ4387MJ*MTY4MTkwNjIyOS4xNS4xLjE2ODE5MDkzMDIuNi4wLjA.',
  },
  {
    title: 'Выйти из Иви',
    titleEng: 'Log out',
    link: '#',
  },
];
