import { Injectable, signal } from '@angular/core'
import { SubjectManager } from '../utilities'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  $dialogSubject = new SubjectManager()
  dialogSignal = signal(false)

  constructor() { }
}
