import { Component, Input } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques-component.html',
    styleUrls: ['./parques-component.css']
  })

export class ParquesComponent {
    @Input() nombre: string;
    public tituloParque: string;
    @Input('quartMeter') public metros: number; // aparecerá metros por defecto, ya que está hardcodeado.
    public vegetacion: string;
    public abierto: boolean;
    public nombreDelParque: string;
    public precio: number;


    constructor() {
        this.tituloParque = "Horrorland";
        this.metros = 360;
        this.vegetacion = 'Alta';
    }
}