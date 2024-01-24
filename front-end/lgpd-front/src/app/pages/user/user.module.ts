import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class UserModule { 

}
