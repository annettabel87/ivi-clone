import { useRouter } from 'next/router';
import Person from '../../modules/person/';

const objectOfPerson = {
  kinopoiskId: 23449,
  photoLink:
    'http://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2e5d6b27-5868-484d-a673-0797bbf904c6/280x420',
  name: 'Дэвид Хейман',
  enName: 'David Heyman',
  professions: ['Продюсер', 'Актер', 'Режиссер', 'Сценарист'],
};
const PersonPage = () => {
  const router = useRouter();
  const { personId } = router.query;
  console.log(personId);
  return (
    <>
      <Person personData={objectOfPerson} />
    </>
  );
};

export default PersonPage;
