import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  titulo: string
  constructor() { }

  ngOnInit() {
    this.titulo = "listado"
  }

}
