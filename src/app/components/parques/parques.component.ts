import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques-component.html',
    styleUrls: ['./parques-component.css']
  })

export class ParquesComponent {
    @Input() nombre: string;
    public tituloParque: string;
    @Input('quartMeter') public metros: number; // aparecerá metros por defecto, ya que está hardcodeado.
    @Output() bindDataParent =  new EventEmitter<string>(); // parent to children
    public vegetacion: string;
    public abierto: boolean;
    public nombreDelParque: string;
    public precio: number;


    constructor() {
        this.tituloParque = "Horrorland";
        this.metros = 360;
        this.vegetacion = 'Alta';
        this.nombreDelParque = "nombre principal";
    }

    emitirEvento(){
        this.bindDataParent.emit(this.tituloParque);
    }
}