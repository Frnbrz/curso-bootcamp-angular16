import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { DialogService } from '@src/app/services'
import { CustomButtonComponent, CustomDialogComponent } from '@src/app/shared'
import { UserFormComponent } from '../user-form/user-form.component'


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, CustomDialogComponent, UserFormComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {

  dialogService = inject(DialogService)

  // SIGNAL
  openDialog() {
    this.dialogService.dialogSignal.set(true)
  }


  // SUBJECT MANAGER
  // openDialog() {
  //   this.dialogService.$dialogSubject.setSubject(true)
  // }


}
