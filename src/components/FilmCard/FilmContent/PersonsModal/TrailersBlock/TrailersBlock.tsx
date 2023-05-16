import React, { FC, useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import TrailerSmallCard from '../../TrailerSmallCard/TrailerSmallCard';
import { ITrailersBlockProps } from '@/shared/Interfaces/FilmPageInterfaces';
import arrowIcon from '@/assets/icon/arrow-left.svg';
import styles from './TrailersBlock.module.scss';

const TrailersBlock: FC<ITrailersBlockProps> = ({ trailers, movieName, poster }) => {
  const [isOpenTrailers, setIsOpenTrailers] = useState<boolean>(false);
  const [playedTrailer, setPlayedTrailer] = useState<string>('');

  const onClickHandler = (show: boolean, trailer: string) => {
    setIsOpenTrailers(show);
    setPlayedTrailer(trailer);
  };
  return (
    <div className={styles.trailers}>
      {!isOpenTrailers &&
        trailers.map((trailer) => {
          return (
            <TrailerSmallCard
              key={movieName}
              poster={poster}
              movieName={movieName}
              onClickHandler={onClickHandler}
              trailer={trailer}
              withClock={true}
            />
          );
        })}
      {isOpenTrailers && (
        <>
          <button className={styles.close} onClick={() => setIsOpenTrailers(false)}>
            <Image src={arrowIcon} alt="закрыть" width={20} height={20} />
            <p className={styles.persons__text}>Все трейлеры</p>
          </button>
          <ReactPlayer
            url={playedTrailer}
            origin={'https://localhost:3000/*'}
            className={styles.video}
            controls={true}
            playing={true}
            playsinline={true}
            width={'100%'}
            preload={'auto'}
            frameborder="0"
            allowfullscreen="allowfullscreen"
          />
        </>
      )}
    </div>
  );
};

export default TrailersBlock;
