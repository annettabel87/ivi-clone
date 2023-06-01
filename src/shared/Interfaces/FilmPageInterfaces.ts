import { Url } from 'next/dist/shared/lib/router/router';

export interface ICountry {
  country: string;
  countryId: number;
}

export interface IGenre {
  genre: string;
  genreEng: string;
}

export interface IPerson {
  id: number;
  photo: string;
  name: string;
  enName: string;
  profession: string;
  enProfession: string;
}

export interface IAwards {
  title: string;
  year: number;
  nomination: string[];
}

export interface ISimilarMovies {
  id: number;
  name: string;
  originalName: string;
  poster: string;
  rate: string;
  movieLength: string;
  year: string;
  countries: ICountry[];
  genres: IGenre[];
  ageRating: string;
}

export interface IRate {
  kinopoisk: string;
  kinopoiskCount: string;
  imdb: string;
  imdbCount: string;
}

export interface IFilm {
  id: number;
  movieName: string;
  originalName: string;
  year: number;
  ageRating: string;
  countries: ICountry[];
  genres: IGenre[];
  movieLength: string;
  fullDescription: string;
  description: string;
  rate: IRate;
  poster: string;
  actors: IPerson[];
  trailerLink: string;
  similarMovies: ISimilarMovies[];

  // encyclopedia: [

  // ]
  languages: string[];
  subtitles_languages: string[];
  quality: string; // fullHD и т.п.
  awards?: IAwards[];
  director: IPerson[];
  writers: IPerson[];
  producers: IPerson[];
  operator: IPerson;
  musics: IPerson[];
  designers: IPerson[];
  editor: IPerson;
  voice_actors: IPerson[];
}

export interface IFilmProps {
  filmData: IFilm;
}

export interface IAgeRatingProps {
  ageRating: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface IFilmCardHeaderProps {
  genre: string;
}

export interface IPersonsModal {
  onClose: () => void;
  movie: IFilm;
  comments: IReviews;
}

export interface ICommentProps {
  comments: IComment[];
  hiddenComments: () => void;
}

export interface IReviewFormProps {
  onClose: () => void;
}

export interface IPersonsList {
  persons: IPerson[];
  title: string;
}

export interface ITrailersBlockProps {
  trailers: string[];
  movieName: string;
  poster: string;
}

export interface ITrailerSmallCard {
  poster: string;
  movieName: string;
  onClickHandler: (show: boolean, trailer: string) => void;
  trailer: string;
  withClock?: boolean;
  carousel?: boolean;
}

export interface IWatchAllDevicesProps {
  movieName: string;
  poster: string;
}

export interface IFilmInfoProps {
  setIsOpen: (open: boolean) => void;
  filmInfo: IFilm;
}

export interface IMedallionsProps {
  persons: IPerson[];
  rating: string;
}

export interface IRatingWidgetProps {
  rating: IRate;
}

export interface IFilmTrailerProps {
  trailer: string;
  ageRating: string;
  name: string;
  year: number;
  movieLength: string;
  countries: ICountry[];
  genres: IGenre[];
  languages: string[];
  subtitles_languages: string[];
  quality: string;
  movieName: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export interface IModalTrailer {
  onClose: () => void;
  trailer: string;
  ageRating: string;
  name: string;
}

export interface IWatchParamsProps {
  year: number;
  movieLength: string;
  ageRating: string;
  countries: ICountry[];
  genres: IGenre[];
  languages: string[];
  subtitles_languages: string[];
  quality: string;
  align: 'left' | 'center';
}

export interface IPosterCardProps {
  href: Url;
  imgSrc: string;
  imgAlt: string;
  width: number;
  height: number;
}

export interface IComment {
  id: number;
  commentAuthor: string;
  commentText: string;
  commentDate: string;
}

export interface IReview {
  author: string;
  title: string;
  text: string;
  userId: string;
  reviewId: string;
  reviewDate: string;
  comments: IComment[];
}

export interface IReviews {
  id: number;
  entityKinopoiskId: number;
  entityJSON: IReview[];
}

export interface IReviewCardProps {
  review: IReview;
  filmId: number;
}
