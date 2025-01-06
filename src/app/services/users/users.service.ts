import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IUser } from '@interfaces/i-user'
import { HttpClient } from '@angular/common/http'
import { myAppConfig } from '../../my-app-config'

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly http: HttpClient = inject(HttpClient)

  loadUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://dummyjson.com/users/${id}?delay=${myAppConfig.delay}`)
  }
}
