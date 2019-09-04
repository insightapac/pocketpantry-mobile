import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(private modalController: ModalController,) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
