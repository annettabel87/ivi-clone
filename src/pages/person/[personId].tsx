import { useRouter } from 'next/router';

const Person = () => {
  const router = useRouter();
  const { personId } = router.query;
  return <div className="film">Person {personId}</div>;
};
export default Person;
