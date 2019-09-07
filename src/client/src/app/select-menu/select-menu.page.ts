import { Component, OnInit } from '@angular/core';


interface Menu {
  img: string;
  name: string;
  filters: Array<string>;
}

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.page.html',
  styleUrls: ['./select-menu.page.scss'],
})
export class SelectMenuPage implements OnInit {

  public menuCollection: Array<Menu> = [
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'All burgers',
      filters: ['burgers']
    },
    {
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      name: 'Some burgers',
      filters: ['burgers', 'burgers']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getQueryPrams(menu: Menu) {
    return ({filters: menu.filters});
  }

  doRefresh(event) {

  }
}
