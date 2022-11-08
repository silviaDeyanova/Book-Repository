export interface IUserLoginData {
  id: number;
  username: string;
  password: string;
}

export interface IUserPublicData {
  email?: string;
  firstName?: string;
  lastName?: string;
}
export interface IUser extends IUserLoginData, IUserPublicData {}
