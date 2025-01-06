import { Component, inject } from '@angular/core'
import { UsersStore } from '@stores/users.store'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-route1',
  imports: [CommonModule],
  templateUrl: './route1.component.html',
  styleUrl: './route1.component.scss',
})
export class Route1Component {
  readonly usersStore = inject(UsersStore)
}
