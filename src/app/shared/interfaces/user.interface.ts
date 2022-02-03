import UserRole from "../enums/user-role.enum";

export interface IUser {
  id: string;
  name: string;
  email: string;
  surname: string;
  unitsOwnedIds: number[];
  token: string;
  role: UserRole;
}
