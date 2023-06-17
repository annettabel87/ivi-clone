import Image from 'next/image';
import search from '@/assets/icon/search.svg';
import styles from './SearchInput.module.scss';
import { FC } from 'react';

export interface ISearchInputProps {
  placeholder: string;
  setValue: (value: string) => void;
  value: string;
}

const SearchInput: FC<ISearchInputProps> = ({ placeholder, setValue, value }) => {
  return (
    <div className={styles.searchInput}>
      <div className={styles.searchInput__input_body}>
        <input
          type="text"
          name="search"
          onChange={(e) => setValue(e.target.value.toLocaleLowerCase())}
          value={value}
          className={styles.searchInput__input}
          placeholder={placeholder}
        />
        <div className={styles.searchInput__btn}>
          <Image
            src={search}
            width={16}
            height={16}
            alt="поиск"
            className={styles.searchInput__btn_img}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
