import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ForexComponent } from './forex/forex.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { OtentikasiGuard } from './otentikasi.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path:"admin", component: AdminComponent},
  { path: "dashboard", component: DashboardComponent, canActivate : [OtentikasiGuard]},
  { path: "dashboard2", component: Dashboard2Component, canActivate : [OtentikasiGuard]},
  { path: "forex", component: ForexComponent, canActivate : [OtentikasiGuard]},
  { path: "dashboard3", component: Dashboard3Component},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "mahasiswa", component: MahasiswaComponent, canActivate : [OtentikasiGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
