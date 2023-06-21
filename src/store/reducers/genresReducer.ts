import { genreApi } from '@/api/genreApi';
import { IGenre } from '@/shared/Interfaces/FilmPageInterfaces';
import errorMessage from '@/shared/errorMessage/errorMessage';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export const getGenres = createAsyncThunk('genres/getGenres', async (_, { rejectWithValue }) => {
  try {
    const response = await genreApi.getGenres();
    if (response) {
      return response;
    }
  } catch (error) {
    return rejectWithValue(errorMessage(error as AxiosError));
  }
});

export const updateGenre = createAsyncThunk(
  'genres/updateGenre',
  async (data: IGenre, { rejectWithValue }) => {
    try {
      const response = await genreApi.updateGenre(data);
      if (response) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(errorMessage(error as AxiosError));
    }
  }
);

export interface IGenresState {
  genresRequestStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  genres: IGenre[];
  errorGenres: string | null;
  errorGenreUpdate: string | null;
}

export const initialState: IGenresState = {
  genres: [],
  genresRequestStatus: 'idle',
  errorGenres: null,
  errorGenreUpdate: null,
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    SET_GENRES(state, action: PayloadAction<IGenre[]>) {
      state.genres = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.genresRequestStatus = 'pending';
      state.errorGenres = '';
    });
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genresRequestStatus = 'succeeded';
      if (action.payload) {
        state.genres = action.payload;
      }
    });
    builder.addCase(getGenres.rejected, (state) => {
      state.genresRequestStatus = 'failed';
      state.errorGenres = 'Жанров не найдено!';
    });
    builder.addCase(updateGenre.pending, (state) => {
      state.genresRequestStatus = 'pending';
      state.errorGenreUpdate = '';
    });
    builder.addCase(updateGenre.fulfilled, (state, action: PayloadAction<IGenre | undefined>) => {
      state.genresRequestStatus = 'succeeded';
      if (action.payload !== undefined) {
        const updateItem = state.genres.find((item) => item.genreEng == action.payload?.genreEng);
        if (updateItem) {
          updateItem.genre = action.payload.genre;
          updateItem.genreEng = action.payload.genreEng;
        }
      }
    });
    builder.addCase(updateGenre.rejected, (state) => {
      state.errorGenreUpdate = 'Жанр не обновлен';
    });
  },
});

export const { SET_GENRES } = genresSlice.actions;

export default genresSlice.reducer;
