import { AuthInterceptor } from './authentication/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { NgpSortModule } from 'ngp-sort-pipe';
import { FooterComponent } from './common/footer/footer.component';
import { BackbuttonComponent } from './common/backbutton/backbutton.component';
import { NullResponseComponent } from './models/null-response/null-response.component';

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
    NullResponseComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    FontAwesomeModule,
    NgpSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pl' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
