import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login/login.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { LoginGuard } from './auth/guards/login.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainHomeComponent, canActivate:[LoginGuard] },
  { path: 'detalle', component: DetalleUsuarioComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
