import { Component } from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda-component.html',
    styleUrls: ['./tienda.component.css']
  })

export class TiendaComponent {

    public titulo;
    public nombreDelparque: string;
    
    constructor() {
        this.titulo = "Este es el titulo";
    }

}