export const checkIsMobile = () => {
  if (window?.matchMedia) {
    const match_mobile = window.matchMedia('(pointer:coarse)');
    return match_mobile.matches;
  }
  return false;
};
