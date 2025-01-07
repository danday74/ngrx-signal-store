import { IUser } from '@interfaces/i-user'

export interface IUsersResponse {
  limit: number
  skip: number
  total: number
  users: IUser[]
}
