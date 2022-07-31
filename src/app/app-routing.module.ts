import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';

//configuracion de rutas 
const routes: Routes = [
  //ruta por defecto 
  { path: '', redirectTo: 'login', pathMatch: 'full'},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verificar-email', component: VerificarEmailComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  //p/ ruta incorrecta 
  { path: '**', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
