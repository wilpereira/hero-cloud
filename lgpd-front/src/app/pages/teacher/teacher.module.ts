import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  declarations: [
    TeacherFormComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
