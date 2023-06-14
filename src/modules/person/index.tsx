import Image from 'next/image';
import arrowIcon from '../../assets/icon/arrow.png';
import Personify from './personInfo/personInfo';
import styles from './person.module.scss';
import Container from '@/components/container/container';
import PersonFilmography from './personFilmography/personFilmography';
import FilmList from './personFilmography/filmList/filmList';
import { useRouter } from 'next/router';
import { IPerson } from '@/shared/interfaces/interfaces';
import { FC } from 'react';

const filmArray = [
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/38b9f26a-706f-4d19-8ad8-dbca62ac8ed3/3840x',
    name: 'Бойтесь Человека-невидимки',
    year: '2022',
    // rate: {
    //   kinopoisk: '4.4',
    // },
    filmId: 1,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/c353a226-f1f4-40f6-9bd7-bb42d53f0c30/3840x',
    name: 'Воронья лощина',
    year: '2022',
    rate: {
      kinopoisk: '5.8',
    },
    filmId: 2,
  },

  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8d713823-91d8-4604-88e5-00434787bae4/3840x',
    name: 'Садоводы',
    year: '2021',
    rate: {
      kinopoisk: '6.6',
    },
    filmId: 3,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/38b9f26a-706f-4d19-8ad8-dbca62ac8ed3/3840x',
    name: 'Бойтесь Человека-невидимки',
    year: '2022',
    rate: {
      kinopoisk: '4.4',
    },
    filmId: 4,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/c353a226-f1f4-40f6-9bd7-bb42d53f0c30/3840x',
    name: 'Воронья лощина',
    year: '2022',
    rate: {
      kinopoisk: '5.8',
    },
    filmId: 5,
  },

  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8d713823-91d8-4604-88e5-00434787bae4/3840x',
    name: 'Садоводы',
    year: '2021',
    rate: {
      kinopoisk: '6.6',
    },
    filmId: 6,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/38b9f26a-706f-4d19-8ad8-dbca62ac8ed3/3840x',
    name: 'Бойтесь Человека-невидимки',
    year: '2022',
    rate: {
      kinopoisk: '4.4',
    },
    filmId: 7,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/c353a226-f1f4-40f6-9bd7-bb42d53f0c30/3840x',
    name: 'Воронья лощина',
    year: '2022',
    rate: {
      kinopoisk: '5.8',
    },
    filmId: 8,
  },

  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8d713823-91d8-4604-88e5-00434787bae4/3840x',
    name: 'Садоводы',
    year: '2021',
    rate: {
      kinopoisk: '6.6',
    },
    filmId: 9,
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8d713823-91d8-4604-88e5-00434787bae4/3840x',
    name: 'Садоводы',
    year: '2021',
    rate: {
      kinopoisk: '6.6',
    },
    filmId: 10,
  },
];

interface IPersonProps {
  personData: IPerson;
}
const Person: FC<IPersonProps> = ({ personData }) => {
  const { kinopoiskId, name, enName, photoLink } = personData;
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.back()} className={styles.backArrow}>
        <Image src={arrowIcon} alt={'Назад'} width={8} height={20} />
        <p>Назад</p>
      </div>
      <Container>
        <Personify photoLink={photoLink} name={name} enName={enName} />
        <PersonFilmography films={filmArray} />
      </Container>
    </>
  );
};

export default Person;
