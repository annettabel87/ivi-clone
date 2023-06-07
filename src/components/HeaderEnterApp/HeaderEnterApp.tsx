import styles from './HeaderEnterApp.module.scss';

type HeaderEnterAppType = {
  title?: string;
};
const HeaderEnterApp = ({ title }: HeaderEnterAppType) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
    </div>
  );
};

export default HeaderEnterApp;
