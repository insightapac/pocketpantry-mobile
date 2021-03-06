import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MsalService } from './services/msal.service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { AppCenterAnalytics } from '@ionic-native/app-center-analytics/ngx';
import { AppCenterCrashes } from '@ionic-native/app-center-crashes/ngx';

import { AddItemPageModule } from './modals/add-item/add-item.module';
import { RecipesPageModule } from './recipes/recipes.module';
import { SelectMenuPageModule } from './select-menu/select-menu.module';
import { PlanPageModule } from './plan/plan.module';
import { environment } from 'src/environments/environment';
import { API_BASE_URL, RecipesClient } from './Clients/Shopping.client';
import { BrowseMealsModule } from './browse-meals/browse-meals.module';
import { TabsPage } from './tabs/tabs.page';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AddItemPageModule,
    RecipesPageModule,
    SelectMenuPageModule,
    PlanPageModule,
    BrowseMealsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    MsalService,
    AppCenterAnalytics,
    AppCenterCrashes,
    TabsPage,
    {
        provide: API_BASE_URL,
        useValue: environment.API_BASE_URL
    },
    RecipesClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private appCenterCrashes: AppCenterCrashes,
  ) {
    this.appCenterCrashes.setEnabled(true).then(() => {
      this.appCenterCrashes.lastSessionCrashReport().then(report => {
          console.log('Crash report', report);
      });
   });
  }
}
