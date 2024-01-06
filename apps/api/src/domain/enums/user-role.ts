export const UserRoleValues = ['customer', 'admin', 'staff'] as const;

export type UserRole = (typeof UserRoleValues)[number];
