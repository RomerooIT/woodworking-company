import { IUser } from '../entity/user.model';

export type CreateUserParams = Omit<IUser, 'id' | 'profileUri'>;

export interface GetUserByIdParams {
  userId: number;

}
export interface GetUserByNameParams {
  name: string;
}

export interface UpdateUserParams
  extends Partial<Pick<IUser, 'email' | 'name' | 'surname'>> {
  userId: number;
}

export interface UpdateUserResult {
  data: IUser;
}
