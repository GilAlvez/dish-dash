export const UserGenderValues = ['male', 'female', 'other', 'unknown'] as const;

export type UserGender = (typeof UserGenderValues)[number];
