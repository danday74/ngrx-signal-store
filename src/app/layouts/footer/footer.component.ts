import { Component, signal } from '@angular/core'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-footer',
  imports: [
    DatePipe,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  date = signal(new Date())
}
