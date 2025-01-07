import { Component, inject } from '@angular/core'
import { UsersStore } from '@stores/users.store'
import { CommonModule } from '@angular/common'
import { TSortProp } from '@ttypes/t-sort-prop'
import { CasePipe } from '@pipes/case/case.pipe'
import { UserComponent } from '@components/user/user.component'

@Component({
  selector: 'app-route1',
  imports: [CommonModule, CasePipe, UserComponent],
  templateUrl: './route1.component.html',
  styleUrl: './route1.component.scss',
})
export class Route1Component {
  readonly usersStore = inject(UsersStore)

  orderBy(prop: string) {
    this.usersStore.orderBy(prop as TSortProp)
  }

  setActiveUser(id: number) {
    this.usersStore.setActiveUser(id)
  }
}
