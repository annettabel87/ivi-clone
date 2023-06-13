import { FC } from 'react';
import FilmCard from '@/components/FilmCard/FilmCard';
import { IFilm, IFilmProps } from '@/shared/Interfaces/FilmPageInterfaces';
import { GetServerSideProps } from 'next';
import { filmApi } from '@/api/filmApi';

const Film: FC<IFilmProps> = ({ filmData }) => {
  return (
    <div className="film">
      <FilmCard {...filmData} />
    </div>
  );
};
export default Film;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const { filmId } = context.params;
  // console.log(filmId);

  // const response = await filmApi.getFilm(filmId!);
  // console.log(response);

  const data: IFilm = {
    kinopoiskId: 435,
    name: 'Зеленая миля',
    originalName: 'The Green Mile',
    year: 1999,
    ageRating: '16+',
    countries: [{ country: 'США', countryId: 1 }],
    genres: [
      {
        genre: 'драма',
        genreEng: 'drama',
      },
      {
        genre: 'фэнтези',
        genreEng: 'fantasy',
      },
      {
        genre: 'криминал',
        genreEng: 'criminal',
      },
    ],
    movieLength: '189 мин. / 03:09',
    fullDescription:
      'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
    description:
      'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
    trailerLink: 'https://www.youtube.com/embed/TODt_q-_4C4',
    actors: [
      {
        personKinopoiskId: 9144,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_9144.jpg',
        name: 'Том Хэнкс',
        nameEng: 'Tom Hanks',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 12759,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_12759.jpg',
        name: 'Дэвид Морс',
        nameEng: 'David Morse',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 22527,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_22527.jpg',
        name: 'Бонни Хант',
        nameEng: 'Bonnie Hunt',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 677,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_677.jpg',
        name: 'Майкл Кларк Дункан',
        nameEng: 'Michael Clarke Duncan',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 20664,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_20664.jpg',
        name: 'Джеймс Кромуэлл',
        nameEng: 'James Cromwell',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 8989,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_8989.jpg',
        name: 'Майкл Джитер',
        nameEng: 'Michael Jeter',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 1130,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1130.jpg',
        name: 'Грэм Грин',
        nameEng: 'Graham Greene',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 12761,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_12761.jpg',
        name: 'Даг Хатчисон',
        nameEng: 'Doug Hutchison',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_21496.jpg',
        name: 'Сэм Рокуэлл',
        nameEng: 'Sam Rockwell',
        profession: 'актеры',
        enProfession: 'actor',
      },
    ],
    similarMovies: [
      {
        similarKinopoiskId: 326,
        name: 'Побег из Шоушенка',
        nameEng: 'The Shawshank Redemption',
        rate: '9.0',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig',
      },
      {
        similarKinopoiskId: 448,
        name: 'Форрест Гамп',
        nameEng: 'Forrest Gump',
        rate: '7.7',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/orig',
      },
      {
        similarKinopoiskId: 723,
        name: 'Планета Ка-Пэкс',
        nameEng: 'K-PAX',
        rate: '8.0',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/83aeba81-a956-4e70-b19d-40a4db1284d9/orig',
      },
      {
        similarKinopoiskId: 738,
        name: 'Жизнь Дэвида Гейла',
        nameEng: 'The Life of David Gale',
        rate: '6.7',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/09a852e0-394e-457e-b637-880cadc38dd2/orig',
      },
      {
        similarKinopoiskId: 279880,
        name: 'Подмена',
        nameEng: 'Changeling',
        rate: '9.1',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/295dc81a-a86f-4246-872c-6b5bc75c74f0/orig',
      },
      {
        similarKinopoiskId: 357,
        name: 'Убить пересмешника',
        nameEng: 'To Kill a Mockingbird',
        rate: '5.0',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/46b80991-7b6f-484b-b6dd-8cd2cd6ccbe9/orig',
      },
      {
        similarKinopoiskId: 273302,
        name: 'Мгла',
        nameEng: 'The Mist',
        rate: '7.7',
        year: '2019',
        movieLength: '189 мин. / 03:09',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/e365ec59-b8ba-4d2c-b068-0c472832a47e/orig',
      },
      {
        similarKinopoiskId: 2271,
        name: 'Пудра',
        nameEng: 'Powder',
        rate: '7.7',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/feb20b68-6f88-433c-a6b2-44f30304ff66/orig',
      },
      {
        similarKinopoiskId: 646,
        name: 'Танцующая в темноте',
        nameEng: 'Dancer in the Dark',
        rate: '6.7',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/355a7fde-66df-42e4-9360-ee8400221203/orig',
      },
      {
        similarKinopoiskId: 7363,
        name: 'Мертвец идет',
        nameEng: 'Dead Man Walking',
        rate: '5.7',
        movieLength: '189 мин. / 03:09',
        year: '2019',
        countries: [{ country: 'США', countryId: 1 }],
        ageRating: '16+',
        genres: [
          {
            genre: 'драма',
            genreEng: 'drama',
          },
        ],
        poster:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/7fcb3641-786c-4f27-9471-429caca81c81/orig',
      },
    ],

    rate: {
      kinopoisk: '9.072',
      kinopoiskCount: '290 677 оценок',
      imdb: '9',
      imdbCount: '290 677 оценок',
    },
    poster: 'https://st.kp.yandex.net/images/film_big/435.jpg',
    languages: ['Рус', 'Eng'],
    subtitles_languages: ['Рус', 'Eng'],
    quality: 'fullHD',
    director: [
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'режиссеры',
        enProfession: 'director',
      },
    ],
    producers: [
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'режиссеры',
        enProfession: 'director',
      },
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'режиссеры',
        enProfession: 'director',
      },
    ],
    operator: {
      personKinopoiskId: 21496,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
      name: 'Фрэнк Дарабонт',
      nameEng: 'Фрэнк Дарабонт',
      profession: 'режиссеры',
      enProfession: 'operator',
    },
    voice_actors: [
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'актеры дубляжа"',
        enProfession: 'voice_actor',
      },
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'актеры дубляжа"',
        enProfession: 'voice_actor',
      },
    ],
    designers: [
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'художники',
        enProfession: 'designer',
      },
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'художники',
        enProfession: 'designer',
      },
    ],
    writers: [
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'редакторы',
        enProfession: 'writer',
      },
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'редакторы',
        enProfession: 'writer',
      },
    ],
    musics: [
      {
        personKinopoiskId: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        nameEng: 'Фрэнк Дарабонт',
        profession: 'композитор',
        enProfession: 'music',
      },
    ],
    editor: {
      personKinopoiskId: 1986116,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1986116.jpg',
      name: 'Ричард Фрэнсис-Брюс',
      nameEng: 'Richard Francis-Bruce',
      profession: 'монтажеры',
      enProfession: 'editor',
    },
  };

  // if (!response) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: { filmData: data },
  };
};
