import { Component, inject } from '@angular/core'
import { UsersStore } from '@stores/users.store'

@Component({
  selector: 'app-route2',
  imports: [],
  templateUrl: './route2.component.html',
  styleUrl: './route2.component.scss',
})
export class Route2Component {
  readonly usersStore = inject(UsersStore)
}
