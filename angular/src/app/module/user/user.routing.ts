import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user.component';
import { NgModule } from '@angular/core';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserSettingComponent } from './components/user-setting/user-setting.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserManagementComponent
      }    
     ,
      {
        path: 'setting',
        component: UserSettingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
