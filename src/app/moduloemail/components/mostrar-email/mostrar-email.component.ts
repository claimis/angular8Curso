import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit {

  title = "Guardar Email"
  emailContacto: string;

  constructor() {
    this.emailContacto = "mostrar"
   }

  ngOnInit() {
  }

}
