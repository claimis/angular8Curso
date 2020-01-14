import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-email',
  template: `
  <h1>Main Email</h1>
  <app-mostrar-email></app-mostrar-email>
              <app-guardar-email></app-guardar-email>`
})
export class MainEmailComponent implements OnInit {

  title = 'Modulo de Email Email'

  ngOnInit()
  {
      
  }
}
