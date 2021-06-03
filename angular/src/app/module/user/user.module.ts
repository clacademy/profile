import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user.routing';
import { UserComponent } from './components/user.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserSettingComponent } from './components/user-setting/user-setting.component';



@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UserRoutingModule,
   ],
    declarations: [UserComponent, UserManagementComponent, UserSettingComponent],
    providers: []
  })
export class UserModule {
}
