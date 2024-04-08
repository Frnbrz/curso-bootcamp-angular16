import { Component, inject } from '@angular/core'
import { UserService } from './services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userService = inject(UserService)
  userValue = this.userService.getUserFormState()
}
