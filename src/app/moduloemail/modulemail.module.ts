import { AdminModule } from './../admin/admin.module';
import { MainEmailComponent } from './components/main-email/main-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

// Decorador ngModule para cargar los componentes
@NgModule ({
    imports: [CommonModule, FormsModule, AdminModule],
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports: [MainEmailComponent]
})

export class ModuloEmailModule {}
