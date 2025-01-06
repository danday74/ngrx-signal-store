import { IAddress } from './i-address'
import { IHair } from './i-hair'
import { ICompany } from './i-company'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  gender: string
  email: string
  phone: string
  username: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: IHair
  address: IAddress
  company: ICompany
  role: string
}
