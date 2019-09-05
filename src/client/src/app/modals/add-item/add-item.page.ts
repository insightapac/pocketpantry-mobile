import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  public searchTerm: string = "";
  public items: any;

  constructor(private modalController: ModalController, private dataService: DataService) { }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }
  
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
