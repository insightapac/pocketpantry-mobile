import { Component } from "@angular/core";
import {
  ModalController,
  NavController,
} from "@ionic/angular";
import { AddItemPage } from "../modals/add-item/add-item.page";
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import * as Tesseract from "tesseract.js";
import { AppCenterAnalytics } from '@ionic-native/app-center-analytics/ngx';
import { AppCenterCrashes } from '@ionic-native/app-center-crashes/ngx';


@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  selectedImage: string;
  imageText: string;

  public recipe: Recipe = {
    name: "Spaghetti Bolognese",
    description: "Short description text about this dish",
    tags: ["Easy meals", "Vegetarian", "Healthy"],
    time: 15,
    calories: 1500,
    price: 16,
    servings: 4
  }

  constructor(
    public modalController: ModalController,
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController,
    private camera: Camera,
    private appCenterAnalytics: AppCenterAnalytics,
    private appCenterCrashes: AppCenterCrashes,
  ) {
    this.appCenterAnalytics.trackEvent('tab1', {event: 'loaded'});
    
  }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1000);
  }

  async presentAddItemModal() {
    const modal = await this.modalController.create({
      component: AddItemPage
    });
    return await modal.present();
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  selectSource() {
    this.getPicture(this.camera.PictureSourceType.CAMERA);
  }

  getPicture(sourceType: PictureSourceType) {
    this.camera
      .getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: sourceType,
        allowEdit: true,
        saveToPhotoAlbum: false,
        correctOrientation: true
      })
      .then(imageData => {
        this.selectedImage = `data:image/jpeg;base64,${imageData}`;
      });
  }

  recognizeImage() {
    Tesseract.recognize(this.selectedImage)
      .catch(err => console.error(err))
      .then(result => {
        this.imageText = result.text;
      })
  }
}
