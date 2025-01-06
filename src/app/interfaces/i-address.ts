import { ILatLng } from './i-lat-lng'

export interface IAddress {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: ILatLng
  country: string
}
