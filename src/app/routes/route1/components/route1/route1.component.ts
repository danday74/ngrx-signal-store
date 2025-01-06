import { Component, inject } from '@angular/core'
import { UsersStore } from '@stores/users.store'

@Component({
  selector: 'app-route1',
  imports: [],
  templateUrl: './route1.component.html',
  styleUrl: './route1.component.scss',
})
export class Route1Component {
  readonly usersStore = inject(UsersStore)
}
