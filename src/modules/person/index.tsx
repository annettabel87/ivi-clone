import Image from 'next/image';
import arrowIcon from '../../assets/icon/arrow.png';
import Personify from './personInfo/personInfo';
import styles from './person.module.scss';
import Container from '@/components/container/container';
import PersonFilmography from './personFilmography/personFilmography';
import FilmList from './personFilmography/filmList/filmList';
import { useRouter } from 'next/router';

const Person = ({ personData }) => {
  console.log(personData);
  const { kinopoiskId, name, enName, photoLink } = personData;
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.back()} className={styles.backArrow}>
        <Image src={arrowIcon} alt={'Назад'} width={8} height={20}/>
        <p>Назад</p>
      </div>
      <Container>
        <Personify photoLink={photoLink} name={name} enName={enName} />
        <div></div>
        <PersonFilmography>
        <FilmList/>
        </PersonFilmography>
      </Container>
    </>
  );
};

export default Person;
