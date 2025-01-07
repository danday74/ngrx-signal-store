import { Component, input, InputSignal } from '@angular/core'
import { IUser } from '@interfaces/i-user'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { EyeColorPipe } from '@pipes/eye-color/eye-color.pipe'
import { AgePipe } from '@pipes/age/age.pipe'

@Component({
  selector: 'app-user',
  imports: [CommonModule, NgOptimizedImage, EyeColorPipe, AgePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user: InputSignal<IUser> = input.required<IUser>()
}
