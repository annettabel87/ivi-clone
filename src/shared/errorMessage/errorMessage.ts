const errorMessage = (error: unknown) => {
  let errorMessage = 'some error';
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return errorMessage;
};

export default errorMessage;
