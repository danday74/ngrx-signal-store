import { patchState, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals'
import { IUser } from '@interfaces/i-user'
import { computed, inject } from '@angular/core'
import { find, findIndex, noop, orderBy } from 'lodash-es'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs'
import { UsersService } from '@services/users/users.service'
import { tapResponse } from '@ngrx/operators'
import { TSortProp } from '@ttypes/t-sort-prop'
import { TSortDir } from '@ttypes/t-sort-dir'
import { toObservable } from '@angular/core/rxjs-interop'

interface UsersState {
  rawUsers: IUser[]
  id: number
  sort: {
    prop: TSortProp
    dir: TSortDir
  }
}

const initialState: UsersState = {
  rawUsers: [],
  id: null,
  sort: {
    prop: 'id',
    dir: 'asc',
  },
}

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withProps((store) => ({
    rawUsers$: toObservable(store.rawUsers),
  })),
  withComputed((store) => ({
    user: computed((): IUser => find(store.rawUsers(), { id: store.id() })),
    users: computed((): IUser[] => orderBy(store.rawUsers(), [store.sort().prop], [store.sort().dir])),
    length: computed((): number => store.rawUsers().length),
  })),
  withMethods((store, usersService = inject(UsersService)) => ({
    setActiveUser(id: number) {
      if (id != null) patchState(store, { id })
    },
    orderBy(prop: TSortProp) {
      if (store.sort().prop === prop) {
        patchState(store, (state) => ({ sort: { prop, dir: state.sort.dir === 'asc' ? 'desc' : 'asc' as TSortDir } }))
      } else {
        patchState(store, { sort: { prop, dir: 'asc' as TSortDir } })
      }
    },
    loadUsers: rxMethod<void>(
      pipe(
        switchMap(() => {
          return usersService.loadUsers().pipe(
            tapResponse({
              next: (users: IUser[]) => patchState(store, { rawUsers: users }),
              error: console.error,
              finalize: () => noop(),
            }),
          )
        }),
      ),
    ),
    loadUser: rxMethod<number>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((id: number) => {
          return usersService.loadUser(id).pipe(
            tapResponse({
              next: (user: IUser) => {
                let users: IUser[] = store.rawUsers()
                const idx: number = findIndex(users, { id })
                if (idx === -1) {
                  users = [...users, user]
                } else {
                  users[idx] = user
                }
                patchState(store, { rawUsers: users })
              },
              error: console.error,
              finalize: () => noop(),
            }),
          )
        }),
      ),
    ),
  })),
)
