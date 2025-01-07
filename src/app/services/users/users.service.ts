import { inject, Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { IUser } from '@interfaces/i-user'
import { HttpClient } from '@angular/common/http'
import { myAppConfig } from '../../my-app-config'
import { IUsersResponse } from '@interfaces/i-users-response'

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly http: HttpClient = inject(HttpClient)

  loadUsers(): Observable<IUser[]> {
    return this.http.get<IUsersResponse>(`https://dummyjson.com/users?limit=6&delay=${myAppConfig.delay}`).pipe(
      map((res: IUsersResponse) => {
        return res.users
      }),
    )
  }

  loadUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://dummyjson.com/users/${id}?delay=${myAppConfig.delay}`)
  }
}
