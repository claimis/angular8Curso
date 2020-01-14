import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit {

  title = 'Guardar'
  emailContacto: string;

  constructor() { 
    this.emailContacto = "email"
  }

  ngOnInit() {
  }

  guardarEmail()
  {
    localStorage.setItem('emailContacto', this.emailContacto);
  }

  ngDoCheck()
  {
    this.emailContacto = localStorage.getItem("emailContacto");
  }

  borrarEmail()
  {
    localStorage.removeItem("emailContacto");
    localStorage.clear();
    this.emailContacto = null
  }



}
