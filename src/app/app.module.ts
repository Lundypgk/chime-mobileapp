import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ChimeApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupBrandPage } from "../pages/login/signup-brand/signup-brand";
import { ChimerHomePage } from "../pages/chimer/chimer-home/chimer-home";
import { ChimerTabsPage } from "../pages/chimer/chimer-tabs/chimer-tabs";
import { ChimerProfilePage } from "../pages/chimer/chimer-profile/chimer-profile";
import { ChimerJobsPage } from "../pages/chimer/chimer-jobs/chimer-jobs";
import { ChimerListingPage } from "../pages/chimer/chimer-listing/chimer-listing";
import { SignupChimerPage } from "../pages/login/signup-chimer/signup-chimer";
import { BrandTabsPage } from "../pages/brand/brand-tabs/brand-tabs";
import { BrandHomePage } from "../pages/brand/brand-home/brand-home";

@NgModule({
  declarations: [
    ChimeApp,
    LoginPage,
    SignupBrandPage,
    SignupChimerPage,
    ChimerTabsPage,
    ChimerHomePage,
    ChimerJobsPage,
    ChimerProfilePage,
    ChimerListingPage,
    BrandTabsPage,
    BrandHomePage
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
    SignupChimerPage,
    ChimerTabsPage,
    ChimerHomePage,
    ChimerJobsPage,
    ChimerProfilePage,
    ChimerListingPage,
    BrandTabsPage,
    BrandHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
