import { AdminRoutingModule } from './admin.routing.module';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AdminRoutingModule],
  providers: []
 // declarations: [AdminComponent]
})
export class AdminModule { }
