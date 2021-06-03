import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Error404Component } from './shared/components/error-404/error-404.component';
import { Error500Component } from './shared/components/error-500/error-500.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { NoInternetConnectionComponent } from './shared/components/no-internet-connection/no-internet-connection.component';
import { UserInfoGuard } from './shared/guards/user-info.guard';


const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'home', component: HomeComponent, canActivate: [UserInfoGuard] },        
          {
            path: 'user', canActivate: [UserInfoGuard],
            loadChildren: () => import('../app/module/user/user.module').then(m => m.UserModule)
          },         
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]

      },

    ]
  },
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
  { path: 'no-internet', component: NoInternetConnectionComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
