import { AuthGuard } from './authentication/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './mainpage/home/home.component';
import { LandingPageComponent } from './mainpage/landing-page/landing-page.component';
import { MelangeCreateComponent } from './mainpage/melange-create/melange-create.component';
import { MelangeViewComponent } from './mainpage/melange-view/melange-view.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'create',
        component: MelangeCreateComponent,
      },
      {
        path:'melange/:id',
        component: MelangeViewComponent,
      }

    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
