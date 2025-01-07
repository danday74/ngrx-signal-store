import { Component, computed, effect, inject, input, InputSignal, Signal } from '@angular/core'
import { UsersStore } from '@stores/users.store'
import { CommonModule } from '@angular/common'
import { TSortProp } from '@ttypes/t-sort-prop'
import { CasePipe } from '@pipes/case/case.pipe'
import { UserComponent } from '@components/user/user.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-route1',
  imports: [CommonModule, CasePipe, UserComponent],
  templateUrl: './route1.component.html',
  styleUrl: './route1.component.scss',
})
export class Route1Component {
  paramId: InputSignal<string> = input<string>(null) // route param

  readonly usersStore = inject(UsersStore)

  private id: Signal<number> = computed<number>((): number => parseInt(this.paramId(), 10) || null)

  private router: Router = inject(Router)

  constructor() {
    effect(() => {
      this.usersStore.setActiveUser(this.id())
    })
  }

  orderBy(prop: string) {
    this.usersStore.orderBy(prop as TSortProp)
  }

  setActiveUser(id: number) {
    this.router.navigateByUrl(`/route1/${id}`).then()
  }
}
