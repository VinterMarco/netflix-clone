import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { GetStartedComponent } from './components/login/get-started/get-started.component';
import { InfoAndImagesComponent } from './components/login/info-and-images/info-and-images.component';
import { FAQComponent } from './components/login/faq/faq.component';
import { FooterForLoginComponent } from './components/login/footer-for-login/footer-for-login.component';
import { PreGetStart1Component } from './components/login/get-started/pre-get-start1/pre-get-start1.component';
import { PreGetStart2Component } from './components/login/get-started/pre-get-start2/pre-get-start2.component';
import { PreGetStart3Component } from './components/login/get-started/pre-get-start3/pre-get-start3.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { InfoAndImages2Component } from './components/login/info-and-images2/info-and-images2.component';
import { InfoAndImages3Component } from './components/login/info-and-images3/info-and-images3.component';
import { InfoAndImages4Component } from './components/login/info-and-images4/info-and-images4.component';


const routes:Routes = [
  { path: 'sign-up', component: SingUpComponent},
  { path: 'login', component: LoginComponent},
  { path : 'sign-up-1', component: PreGetStart1Component},
  { path : 'sign-up-1-regForm', component: PreGetStart2Component},
  { path : 'sign-up-3-last', component: PreGetStart3Component},
]

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    LoginComponent,
    GetStartedComponent,
    InfoAndImagesComponent,
    FAQComponent,
    FooterForLoginComponent,
    PreGetStart1Component,
    PreGetStart2Component,
    PreGetStart3Component,
    CustomHeaderComponent,
    CustomFooterComponent,
    InfoAndImages2Component,
    InfoAndImages3Component,
    InfoAndImages4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
