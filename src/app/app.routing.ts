
import { HomeComponent } from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ParquesComponent } from './components/parques/parques.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeeperComponent } from './components/keeper/keeper.component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full' ,redirectTo:'home'},
    {path: 'parque', component: ParquesComponent},
   // {path: '**', component: HomeComponent}, // cuando la ruta falle o no exista
    {path: 'home', component: HomeComponent},
    {path: 'keeper', component: KeeperComponent},
    {path: 'animals', component: AnimalsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'tienda', component: TiendaComponent}
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);