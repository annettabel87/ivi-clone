import React, { FC, useState, useEffect } from 'react';
import styles from './HeaderDropdownCatalog.module.scss';
import { LinksList } from '../../LinksList/LinksList';
import * as filmsLinks from '@/shared/headerLinks/filmsLinks';
import * as serialsLinks from '@/shared/headerLinks/serialsLinks';
import * as cartoonsLinks from '@/shared/headerLinks/cartoonsLinks';
import { HeaderWidget } from '../HeaderWidget/HeaderWidget';
import { ILinks } from '@/shared/Interfaces/ILinks';
import * as postersLinks from '@/shared/headerLinks/postersFeedLinks';

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
      setGenres(filmsLinks.filmsGenresLinks);
      setCountries(filmsLinks.filmsByCountriesLinks);
      setYears(filmsLinks.filmsByYearLinks);
      setAdditional(filmsLinks.filmsAdditionalLinks);
    }

    if (section === 'serials') {
      setGenres(serialsLinks.serialsGenresLinks);
      setCountries(serialsLinks.serialsByCountriesLinks);
      setYears(serialsLinks.serialsByYearLinks);
      setAdditional(serialsLinks.serialsAdditionalLinks);
    }

    if (section === 'cartoons') {
      setGenres(cartoonsLinks.cartoonsGenresLinks);
      setCountries(cartoonsLinks.cartoonsByCountriesLinks);
      setYears(cartoonsLinks.cartoonsByYearLinks);
      setAdditional(cartoonsLinks.cartoonsAdditionalLinks);
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
        <HeaderWidget
          postersLinks={
            section === 'movies'
              ? postersLinks.filmsPostersLinks
              : section === 'serials'
              ? postersLinks.serialsPostersLinks
              : postersLinks.cartoonsPostersLinks
          }
        />
      </div>
    </div>
  );
};
