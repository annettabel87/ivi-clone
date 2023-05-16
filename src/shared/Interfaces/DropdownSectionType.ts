type ValueOf<T> = T[keyof T];

const DropdownSection = {
  MOVIES: 'movies',
  SERIALS: 'serials',
  CARTOONS: 'cartoons',
  TVPLUS: 'tv+',
  SUBSCRIBE: 'subscribe',
  NOTIFICATIONS: 'notifications',
  PROFILE: 'profile',
  NONE: '',
} as const;

export type DropdownSectionType = ValueOf<typeof DropdownSection>;
