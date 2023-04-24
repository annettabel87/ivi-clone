import FilmCard from '@/components/FilmCard/FilmCard';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { IFilmProps, IFilm } from '..';

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
  // const response = `baseUrl/film/${filmId}`;
  const data: IFilm = {
    id: 435,
    movieName: 'Зеленая миля',
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
        id: 9144,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_9144.jpg',
        name: 'Том Хэнкс',
        enName: 'Tom Hanks',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 12759,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_12759.jpg',
        name: 'Дэвид Морс',
        enName: 'David Morse',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 22527,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_22527.jpg',
        name: 'Бонни Хант',
        enName: 'Bonnie Hunt',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 677,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_677.jpg',
        name: 'Майкл Кларк Дункан',
        enName: 'Michael Clarke Duncan',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 20664,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_20664.jpg',
        name: 'Джеймс Кромуэлл',
        enName: 'James Cromwell',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 8989,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_8989.jpg',
        name: 'Майкл Джитер',
        enName: 'Michael Jeter',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 1130,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1130.jpg',
        name: 'Грэм Грин',
        enName: 'Graham Greene',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 12761,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_12761.jpg',
        name: 'Даг Хатчисон',
        enName: 'Doug Hutchison',
        profession: 'актеры',
        enProfession: 'actor',
      },
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_21496.jpg',
        name: 'Сэм Рокуэлл',
        enName: 'Sam Rockwell',
        profession: 'актеры',
        enProfession: 'actor',
      },
    ],
    similarMovies: [
      {
        id: 326,
        name: 'Побег из Шоушенка',
        originalName: 'The Shawshank Redemption',
        rating: '9.0',
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
        id: 448,
        name: 'Форрест Гамп',
        originalName: 'Forrest Gump',
        rating: '7.7',
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
        id: 723,
        name: 'Планета Ка-Пэкс',
        originalName: 'K-PAX',
        rating: '8.0',
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
        id: 738,
        name: 'Жизнь Дэвида Гейла',
        originalName: 'The Life of David Gale',
        rating: '6.7',
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
        id: 279880,
        name: 'Подмена',
        originalName: 'Changeling',
        rating: '9.1',
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
        id: 357,
        name: 'Убить пересмешника',
        originalName: 'To Kill a Mockingbird',
        rating: '5.0',
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
        id: 273302,
        name: 'Мгла',
        originalName: 'The Mist',
        rating: '7.7',
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
        id: 2271,
        name: 'Пудра',
        originalName: 'Powder',
        rating: '7.7',
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
        id: 646,
        name: 'Танцующая в темноте',
        originalName: 'Dancer in the Dark',
        rating: '6.7',
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
        id: 7363,
        name: 'Мертвец идет',
        originalName: 'Dead Man Walking',
        rating: '5.7',
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
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'режиссеры',
        enProfession: 'director',
      },
    ],
    producers: [
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'режиссеры',
        enProfession: 'director',
      },
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'режиссеры',
        enProfession: 'director',
      },
    ],
    operator: {
      id: 21496,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
      name: 'Фрэнк Дарабонт',
      enName: 'Фрэнк Дарабонт',
      profession: 'режиссеры',
      enProfession: 'operator',
    },
    voice_actors: [
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'актеры дубляжа"',
        enProfession: 'voice_actor',
      },
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'актеры дубляжа"',
        enProfession: 'voice_actor',
      },
    ],
    designers: [
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'художники',
        enProfession: 'designer',
      },
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'художники',
        enProfession: 'designer',
      },
    ],
    writers: [
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'редакторы',
        enProfession: 'writer',
      },
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'редакторы',
        enProfession: 'writer',
      },
    ],
    musics: [
      {
        id: 21496,
        photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
        name: 'Фрэнк Дарабонт',
        enName: 'Фрэнк Дарабонт',
        profession: 'композитор',
        enProfession: 'music',
      },
    ],
    editor: {
      id: 1986116,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1986116.jpg',
      name: 'Ричард Фрэнсис-Брюс',
      enName: 'Richard Francis-Bruce',
      profession: 'монтажеры',
      enProfession: 'editor',
    },
  };

  // if(!data)  {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: { filmData: data },
  };
};
