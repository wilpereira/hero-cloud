import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRoutingModule } from './course-routing.module';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseFormComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
