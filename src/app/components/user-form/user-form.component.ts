import { CommonModule } from "@angular/common"
import { Component, inject } from "@angular/core"
import { FormControl, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { User } from "@src/app/models"
import { DialogService, UserService } from "@src/app/services"
import { CustomButtonComponent } from "@src/app/shared"


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomButtonComponent],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  fb = inject(NonNullableFormBuilder);
  userService = inject(UserService);
  dialogService = inject(DialogService);


  form = this.fb.group({
    name: new FormControl<string>('', [Validators.required]),
  });


  submit() {
    if (this.form.valid) {
      this.userService.setUserFormState(this.form.getRawValue() as User)
      this.dialogService.dialogSignal.set(false)
    } else this.form.markAllAsTouched()
  }

}
