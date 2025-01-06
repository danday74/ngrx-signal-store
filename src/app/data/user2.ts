import { IUser } from '@interfaces/i-user'

export const user2: IUser = {
  id: 2,
  firstName: 'Michael',
  lastName: 'Williams',
  gender: 'male',
  email: 'michael.williams@x.dummyjson.com',
  phone: '+49 258-627-6644',
  username: 'michaelw',
  birthDate: '1989-8-10',
  image: 'https://dummyjson.com/icon/michaelw/128',
  bloodGroup: 'B+',
  height: 186.22,
  weight: 76.32,
  eyeColor: 'Red',
  hair: {
    color: 'Green',
    type: 'Straight',
  },
  address: {
    address: '385 Fifth Street',
    city: 'Houston',
    state: 'Alabama',
    stateCode: 'AL',
    postalCode: '38807',
    coordinates: {
      lat: 22.815468,
      lng: 115.608581,
    },
    country: 'United States',
  },
  company: {
    department: 'Support',
    name: 'Spinka - Dickinson',
    title: 'Support Specialist',
    address: {
      address: '395 Main Street',
      city: 'Los Angeles',
      state: 'New Hampshire',
      stateCode: 'NH',
      postalCode: '73442',
      coordinates: {
        lat: 79.098326,
        lng: -119.624845,
      },
      country: 'United States',
    },
  },
  role: 'admin',
}
