import { useRouter } from 'next/router';
import Person from '../../modules/person/';
import { FC } from 'react';
import { IPerson } from '@/shared/interfaces/interfaces';

interface IPersonPageProps {
  person: IPerson;
}

export const person: IPerson = {
  kinopoiskId: 23449,
  photoLink:
    'http://avatars.mds.yandex.net/get-kinopoisk-image/1600647/2e5d6b27-5868-484d-a673-0797bbf904c6/280x420',
  name: 'Дэвид Хейман',
  enName: 'David Heyman',
  professions: ['Продюсер', 'Актер', 'Режиссер', 'Сценарист'],
};

// export const getStaticPaths = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
//   const paths = data.map(({ id }) => ({
//     params: { id: id.toString() },
//   }));
//   console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// };
// export const getStaticProps = async () => {
//   // const { id } = context.params;
//   const id = 2;
//   // const response = await fetch(
//   //   https://jsonplaceholder.typicode.com/users/${id}
//   // );
//   const response = objectOfPerson;
//   // const data = await response.json();
//   const data = response;

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       person: data,
//     },
//   };
// };

const PersonPage: FC = () => {
  const router = useRouter();
  const { personId: string } = router.query;
  return (
    <>
      <Person personData={person} />
    </>
  );
};

export default PersonPage;
