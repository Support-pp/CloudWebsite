import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { PriceComponent } from './price/price.component';
import { HelpComponent } from './help/help.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterOkComponent } from './register-ok/register-ok.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GetStartedComponent,
    PriceComponent,
    HelpComponent,
    RegisterOkComponent,
    VerifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReCaptchaModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
