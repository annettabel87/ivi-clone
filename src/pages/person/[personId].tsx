import { useRouter } from 'next/router';
import Person from '../../modules/person/';

export interface IPerson {
  kinopoiskId: number;
  photoLink: string;
  name: string;
  enName: string;
  professions: Array<string>;
}

const objectOfPerson: Person = {
  kinopoiskId: 23449,
  photoLink:
    'http://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2e5d6b27-5868-484d-a673-0797bbf904c6/280x420',
  name: 'Дэвид Хейман',
  enName: 'David Heyman',
  professions: ['Продюсер', 'Актер', 'Режиссер', 'Сценарист'],
};
const PersonPage = () => {
  const router = useRouter();
  const { personId: string } = router.query;
  return (
    <>
      <Person personData={objectOfPerson} />
    </>
  );
};

export default PersonPage;
