import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-curso-avanzado';
  precio;
  datoHijo: any;

  ngOnInit()
  {
    /*$("document").ready(function(){
      alert("alert");
    })*/
    $("#caja").dotdotdot({});
  }

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
