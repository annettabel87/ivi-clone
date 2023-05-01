import Image from 'next/image';
import styles from './personInfo.module.scss';

const Personify = ({ photoLink, name, enName }) => {
  return (
    <>
      <div className={styles.personImage}>
        <Image src={photoLink} width={120} height={120} alt={name} />
      </div>
      <h1 className={styles.personHeaderTitle}>{name}</h1>
      <div className={styles.personHeaderAlternate}>{enName}</div>
    </>
  );
};

export default Personify;
