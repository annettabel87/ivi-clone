import { useRouter } from 'next/router';

const Film = () => {
  const router = useRouter();
  const { filmId } = router.query;
  return <div className="film">film {filmId}</div>;
};
export default Film;
