import { AxiosError } from 'axios';

const errorMessage = (error: Error | AxiosError) => {
  let errorMessage = 'some error';
  if (error instanceof AxiosError) {
    if (error.response) {
      errorMessage = error.response.data.message;
    }
  }
  return errorMessage;
};

export default errorMessage;
