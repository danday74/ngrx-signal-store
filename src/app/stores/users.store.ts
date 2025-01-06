import { signalStore, withState } from '@ngrx/signals'
import { IUser } from '@interfaces/i-user'
import { users } from '@data/users'

interface UsersState {
  users: IUser[]
}

const initialState: UsersState = {
  users,
}

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
)
