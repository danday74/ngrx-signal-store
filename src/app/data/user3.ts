import { IUser } from '@interfaces/i-user'

export const user3: IUser = {
  id: 3,
  firstName: 'Sophia',
  lastName: 'Brown',
  gender: 'female',
  email: 'sophia.brown@x.dummyjson.com',
  phone: '+81 210-652-2785',
  username: 'sophiab',
  birthDate: '1982-11-6',
  image: 'https://dummyjson.com/icon/sophiab/128',
  bloodGroup: 'O-',
  height: 177.72,
  weight: 52.6,
  eyeColor: 'Hazel',
  hair: {
    color: 'White',
    type: 'Wavy',
  },
  address: {
    address: '1642 Ninth Street',
    city: 'Washington',
    state: 'Alabama',
    stateCode: 'AL',
    postalCode: '32822',
    coordinates: {
      lat: 45.289366,
      lng: 46.832664,
    },
    country: 'United States',
  },
  company: {
    department: 'Research and Development',
    name: 'Schiller - Zieme',
    title: 'Accountant',
    address: {
      address: '1896 Washington Street',
      city: 'Dallas',
      state: 'Nevada',
      stateCode: 'NV',
      postalCode: '88511',
      coordinates: {
        lat: 20.086743,
        lng: -34.577107,
      },
      country: 'United States',
    },
  },
  role: 'admin',
}
