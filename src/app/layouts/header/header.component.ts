import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { UsersStore } from '@stores/users.store'

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly usersStore = inject(UsersStore)
}
