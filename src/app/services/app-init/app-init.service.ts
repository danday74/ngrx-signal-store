import { inject, Injectable } from '@angular/core'
import { UsersStore } from '@stores/users.store'
import { filter, take } from 'rxjs'
import { IUser } from '@interfaces/i-user'

@Injectable({ providedIn: 'root' })
export class AppInitService {
  private readonly usersStore = inject(UsersStore)

  async init(): Promise<void> {
    this.usersStore.loadUsers()
    return new Promise<void>((resolve, reject) => {
      this.usersStore.rawUsers$.pipe(
        filter((users: IUser[]): boolean => !!users.length),
        take(1),
      ).subscribe({
        next: () => resolve(),
        error: (err: any) => reject(err),
      })
    })
  }
}
