import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { DialogService } from '@src/app/services/dialog.service'
import { CustomButtonComponent } from '../custom-button'

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent {

  // Signal
  dialogService = inject(DialogService);
  isOpen = this.dialogService.dialogSignal;

  closeDialog() {
    this.dialogService.dialogSignal.set(false)
    this.dialogService.$dialogSubject.setSubject(false)
  }


  // Subjetc Manager
  // isOpen = false;
  // constructor(private dialogService: DialogService) {
  //   dialogService.$dialogSubject
  //     .getSubject()
  //     .pipe(takeUntilDestroyed())
  //     .subscribe((dialogState) => (
  //       this.isOpen = dialogState
  //     ))
  // }
  // closeDialog() {
  //   this.isOpen = false
  //   this.dialogService.$dialogSubject.setSubject(false)
  // }


}

