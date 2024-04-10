import { JsonPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ToolbarComponent } from '@src/app/components'
import { UserService } from '@src/app/services'

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss'],
  standalone: true,
  imports: [ToolbarComponent, JsonPipe],
})
export class DialogPageComponent {
  userService = inject(UserService)
  userValue = this.userService.getUserFormState()
}
