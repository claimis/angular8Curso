import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques-component.html',
    styleUrls: ['./parques-component.css']
  })

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
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

    ngOnInit()
    {
        console.log("componente cargado");
    }

    ngOnDestroy()
    {
        console.log("destruccion");
    }

    ngOnChanges(changes: SimpleChanges)
    {
        console.log(changes);
    }

    ngDoCheck()
    {
        console.log("el docheck");
    }

    emitirEvento(){
        this.bindDataParent.emit(this.tituloParque);
    }
}