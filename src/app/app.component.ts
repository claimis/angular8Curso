import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-curso-avanzado';
  precio;
  datoHijo: any;

  mostrarPrecio()
  {
    console.log(this.precio);
  }

  verDatosParque(event)
  {
    this.datoHijo = event;
    console.log(event);
  }

}
