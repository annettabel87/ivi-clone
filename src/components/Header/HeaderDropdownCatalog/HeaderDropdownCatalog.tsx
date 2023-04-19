import React, { FC, useState, useEffect } from 'react';

import styles from './HeaderDropdownCatalog.module.scss';
import { LinksList } from '../../LinksList/LinksList';
import {
  moviesAdditionalLinks,
  moviesByCountriesLinks,
  moviesByYearLinks,
  moviesGenresLinks,
} from '@/shared/headerLinks/moviesLinks';
import {
  serialsGenresLinks,
  serialsByCountriesLinks,
  serialsByYearLinks,
  serialsAdditionalLinks,
} from '@/shared/headerLinks/serialsLinks';
import {
  cartoonsGenresLinks,
  cartoonsByCountriesLinks,
  cartoonsByYearLinks,
  cartoonsAdditionalLinks,
} from '@/shared/headerLinks/cartoonsLinks';
import { HeaderWidget } from '../HeaderWidget/HeaderWidget';

import { ILinks } from '@/shared/footerLinks/footerLinks';

interface IHeaderDropdownCatalogProps {
  section: 'movies' | 'serials' | 'cartoons';
  isVisible: boolean;
}

export const HeaderDropdownCatalog: FC<IHeaderDropdownCatalogProps> = ({ section, isVisible }) => {
  const [genres, setGenres] = useState<ILinks[]>([]);
  const [countries, setCountries] = useState<ILinks[]>([]);
  const [years, setYears] = useState<ILinks[]>([]);
  const [additional, setAdditional] = useState<ILinks[]>([]);

  useEffect(() => {
    if (section === 'movies') {
      setGenres(moviesGenresLinks);
      setCountries(moviesByCountriesLinks);
      setYears(moviesByYearLinks);
      setAdditional(moviesAdditionalLinks);
    }

    if (section === 'serials') {
      setGenres(serialsGenresLinks);
      setCountries(serialsByCountriesLinks);
      setYears(serialsByYearLinks);
      setAdditional(serialsAdditionalLinks);
    }

    if (section === 'cartoons') {
      setGenres(cartoonsGenresLinks);
      setCountries(cartoonsByCountriesLinks);
      setYears(cartoonsByYearLinks);
      setAdditional(cartoonsAdditionalLinks);
    }
  }, [section]);

  return (
    <div className={isVisible ? styles.headerDropdownCatalog : styles.hidden}>
      <div className={styles.headerDropdownCatalog__column}>
        <div className={styles.headerDropdownCatalog__listTitle}>Жанры</div>
        <div className={styles.headerDropdownCatalog__genresList}>
          <LinksList list={genres.slice(0, 11)} />
          <LinksList list={genres.slice(11, genres.length)} />
        </div>
      </div>
      <div className={styles.headerDropdownCatalog__column}>
        <div className={styles.headerDropdownCatalog__listTitle}>Страны</div>
        <LinksList list={countries} />
        <div className={styles.headerDropdownCatalog__listTitle}>Годы</div>
        <LinksList list={years} />
      </div>
      <div className={styles.headerDropdownCatalog__column}>
        <LinksList list={additional} withDivider={true} />
      </div>
      <div className={styles.headerDropdownCatalog__column}>
        <HeaderWidget />
      </div>
    </div>
  );
};
