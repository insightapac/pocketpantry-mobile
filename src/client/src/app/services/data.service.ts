import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public items: any = [];

  constructor() {
    this.items = [
      { title: "Asparagus" },
      { title: "Apples" },
      { title: "Avacado" },
      { title: "Alfalfa" },
      { title: "Almond" },
      { title: "Arugala" },
      { title: "Bruscetta" },
      { title: "Bacon" },
      { title: "Black Beans" },
      { title: "Bagels" },
      { title: "Baked Beans" },
      { title: "Barley" },
      { title: "Beer" },
      { title: "Bluefish" },
      { title: "Broccoli" },
      { title: "Babganoosh" },
    ];
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
