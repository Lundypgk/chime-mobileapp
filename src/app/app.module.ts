import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ChimeApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupBrandPage } from "../pages/login/signup-brand/signup-brand";
import { ChimerHomePage } from "../pages/chimer/home/chimer-home";
import { TabsPage } from "../pages/chimer/tabs/tabs";
import { ChimerProfilePage } from "../pages/chimer/profile/chimer-profile";
import { ChimerJobsPage } from "../pages/chimer/jobs/chimer-jobs";

@NgModule({
  declarations: [
    ChimeApp,
    LoginPage,
    SignupBrandPage,
    TabsPage,
    ChimerHomePage,
    ChimerJobsPage,
    ChimerProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ChimeApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChimeApp,
    LoginPage,
    SignupBrandPage,
    TabsPage,
    ChimerHomePage,
    ChimerJobsPage,
    ChimerProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
