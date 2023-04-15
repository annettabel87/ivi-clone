export interface ILinks {
  title: string;
  link: string;
  certificate?: boolean;
}

export const aboutLinks: ILinks[] = [
  {
    title: 'О компании',
    link: 'https://corp.ivi.ru/?_gl=1*ej3vmc*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTMxNTUxMi4yNC4xLjE2ODEzMTc5NjAuNDcuMC4w',
  },
  {
    title: 'Вакансии',
    link: 'https://corp.ivi.ru/career/?_gl=1*1moy7pv*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTMxNTUxMi4yNC4xLjE2ODEzMTc5NjAuNDcuMC4w#career-vacancy-block',
  },
  { title: 'Программа бета-тестирования', link: 'https://www.ivi.ru/pages/beta' },
  { title: 'Информация для партнёров', link: 'https://www.ivi.ru/info/partners' },
  {
    title: 'Размещение рекламы',
    link: 'https://corp.ivi.ru/advertisers/?_gl=1*1moy7pv*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTMxNTUxMi4yNC4xLjE2ODEzMTc5NjAuNDcuMC4w',
  },
  { title: 'Пользовательское соглашение', link: 'https://www.ivi.ru/info/agreement' },
  { title: 'Политика конфиденциальности', link: 'https://www.ivi.ru/info/confidential' },
  { title: 'Комплаенс', link: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens' },
];

export const sectionsLinks: ILinks[] = [
  { title: 'Мой Иви', link: 'https://www.ivi.ru/' },
  { title: 'Что нового', link: 'https://www.ivi.ru/new' },
  { title: 'Фильмы', link: '/films' },
  { title: 'Сериалы', link: 'https://www.ivi.ru/series' },
  { title: 'Мультфильмы', link: 'https://www.ivi.ru/animation' },
  { title: 'TV+', link: 'https://www.ivi.ru/tvplus' },
  { title: 'Что посмотреть', link: 'https://www.ivi.ru/goodmovies' },
  { title: 'Активация сертификата', link: 'https://www.ivi.ru/cert', certificate: true },
];
