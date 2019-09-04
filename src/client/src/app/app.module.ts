import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { FormsModule } from "@angular/forms";
import { Camera } from '@ionic-native/camera/ngx';

import { AddItemPageModule } from "./modals/add-item/add-item.module";
import { RecipesPageModule } from "./recipes/recipes.module"

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AddItemPageModule,
    RecipesPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
