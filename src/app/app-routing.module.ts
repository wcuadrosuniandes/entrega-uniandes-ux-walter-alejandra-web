import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ListMedicationComponent } from './medicine/list-medication/list-medication.component';
import { EditMedicationComponent } from './medicine/edit-medication/edit-medication.component';
import { RegisterComponent } from './user/register/register.component'

const routes: Routes = [
  {  path:'', component: LoginComponent, pathMatch: 'full'  },
  {  path:'registro', component: RegisterComponent, pathMatch: 'full'  },
  { path: 'medicamentos', component: ListMedicationComponent,  pathMatch: 'full' },
  { path: 'medicamentos/editar', component: EditMedicationComponent, pathMatch: 'full'},
  { path: 'contacto/crear', component: CreateContactComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
