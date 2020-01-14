import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';

const adminRoutes: Routes = [
  { 
    path: 'admin-panel',
    component: MainComponent,
    children: [

      {path: 'listado', component: ListComponent},
      {path: 'crear', component: AddComponent},
      {path: 'editar', component: EditComponent}
      
    ]

   },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
