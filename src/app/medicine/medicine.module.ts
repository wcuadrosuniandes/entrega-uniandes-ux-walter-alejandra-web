import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMedicationComponent } from './list-medication/list-medication.component';
import { EditMedicationComponent } from './edit-medication/edit-medication.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ListMedicationComponent,
    EditMedicationComponent
  ],
  imports: [
    CommonModule, 
    SidebarModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MedicineModule { }