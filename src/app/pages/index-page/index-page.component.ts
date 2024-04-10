import { NgFor } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

interface Curso {
  id: number
  name: string,
  href: string
}

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  standalone: true,
  imports: [NgFor, RouterModule],
})
export class IndexPageComponent {
  cursos: Curso[] = [
    {
      id: 1,
      name: 'Dialog Page',
      href: '/dialog',
    },
    {
      id: 2,
      name: 'App Page',
      href: '/app',
    },
  ]

}
