import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' } // Redirigir cualquier ruta no encontrada a la raíz
];
