import { Url } from 'next/dist/shared/lib/router/router';
import { routingKeys } from '../constants/routingKeys';

export interface ICountry {
  country: string;
  countryId: number;
}

export interface IGenre {
  genre: string;
  genreEng: string;
}

export interface IPerson {
  personKinopoiskId: number;
  name: string;
  nameEng: string;
  photo: string;
  profession: string;
  enProfession: string;
}

export interface IAwards {
  title: string;
  year: number;
  nomination: string[];
}
export interface ISimilarMovies {
  similarKinopoiskId: number;
  name: string;
  nameEng: string;
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
  kinopoiskId: number;
  name: string;
  originalName: string;
  fullDescription: string;
  description: string;
  trailerLink: string;
  year: number;
  movieLength: string;
  ageRating: string;
  rate: IRate;
  actors: IPerson[];
  countries: ICountry[];
  genres: IGenre[];
  poster: string;
  similarMovies: ISimilarMovies[];
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
  reviewId: number;
  lastCommentId: number;
}

export interface IReviewFormProps {
  onClose: () => void;
  filmId: number;
  lastReviewId: number;
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
  commentId: number;
  author: string;
  text: string;
  commentDate: string;
}

export interface IReview {
  author: string;
  title: string;
  text: string;
  userId: number;
  reviewId: number;
  reviewDate: string;
  comments: IComment[] | [];
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

export interface IReviewData {
  routingKey: typeof routingKeys.POST_REVIEW;
  entityKinopoiskId: number;
  entityJSON: Omit<IReview, 'comments'>[];
}

export interface ICommentData {
  routingKey: typeof routingKeys.POST_COMMENT;
  reviewId: number;
  comments: IComment[];
}
