import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppPageComponent } from './pages/app-page/app-page.component'
import { DialogPageComponent } from './pages/dialog-page/dialog-page.component'
import { IndexPageComponent } from './pages/index-page/index-page.component'

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'dialog', component: DialogPageComponent },
  { path: 'app', component: AppPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
