export const authUser = (token: string) => {
  if (token) {
    return 'Bearer ' + token;
  } else {
    return '';
  }
};
