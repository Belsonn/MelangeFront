import { AuthGuard } from './authentication/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './mainpage/home/home.component';
import { LandingPageComponent } from './mainpage/landing-page/landing-page.component';
import { MelangeCreateComponent } from './mainpage/melange-create/melange-create.component';
import { MelangeViewComponent } from './mainpage/melange-view/melange-view.component';
import { MelangeJoinComponent } from './mainpage/melange-join/melange-join.component';
import {CreateMelangeProductComponent} from './mainpage/createmelangeproduct/createmelangeproduct.component'


const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: MelangeCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'join',
    component: MelangeJoinComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'melange/:id',
    component: MelangeViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'melange/:id/products',
    component: CreateMelangeProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LandingPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }