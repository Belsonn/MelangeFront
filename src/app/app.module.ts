import { AngularMaterialModule } from './angular-material.module';
import { AuthInterceptor } from './authentication/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './authentication/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './mainpage/home/home.component';
import { LandingPageComponent } from './mainpage/landing-page/landing-page.component';
import { MelangeCreateComponent } from './mainpage/melange-create/melange-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';
import { MelangeViewComponent } from './mainpage/melange-view/melange-view.component';
import { MelangeJoinComponent } from './mainpage/melange-join/melange-join.component';
import { CreateMelangeProductComponent } from './mainpage/createmelangeproduct/createmelangeproduct.component';
import { NgpSortModule } from "ngp-sort-pipe";
import { FooterComponent } from './common/footer/footer.component';
import { BackbuttonComponent } from './common/backbutton/backbutton.component';
import { DeleteProductDialogComponent } from './common/delete-product-dialog/delete-product-dialog.component';
import { MelangeSummaryComponent } from './mainpage/melange-summary/melange-summary.component';
import { MelangeOverviewComponent } from './mainpage/melange-overview/melange-overview.component';
import { ModalCreateTempUserComponent } from './common/modal-create-temp-user/modal-create-temp-user.component';
import { ActivateComponent } from './authentication/activate/activate.component';

registerLocaleData(localePl, 'pl', localePlExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    LandingPageComponent,
    MelangeCreateComponent,
    MelangeViewComponent,
    MelangeJoinComponent,
    CreateMelangeProductComponent,
    FooterComponent,
    BackbuttonComponent,
    DeleteProductDialogComponent,
    MelangeSummaryComponent,
    MelangeOverviewComponent,
    ModalCreateTempUserComponent,
    ActivateComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgpSortModule,
    AngularMaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pl' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}