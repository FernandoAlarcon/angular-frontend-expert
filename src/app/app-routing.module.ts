import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsSelectorComponent } from './views/breeds-selector/breeds-selector.component';
import { BreedsTableComponent } from './views/breeds-table/breeds-table.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserInfoComponent } from './views/user-info/user-info.component';
import { AuthGuard } from './guards/auth.guard';  // Asegúrate de que AuthGuard esté bien implementado

const routes: Routes = [
  { path: '', redirectTo: '/breeds-selector', pathMatch: 'full' },
  { path: 'breeds-selector', component: BreedsSelectorComponent },
  { path: 'breeds-table',    component: BreedsTableComponent },
  { path: 'login',           component: LoginComponent },
  { path: 'register',        component: RegisterComponent },
  { path: 'user-info',       component: UserInfoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
