import { signalStore, withState } from '@ngrx/signals'
import { IUser } from '@interfaces/i-user'

interface UsersState {
  users: IUser[]
}

const initialState: UsersState = {
  users: [],
}

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
)
