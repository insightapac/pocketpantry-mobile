import { Component, OnInit } from '@angular/core';
import { RecipesClient, CategoryDto } from '../Clients/Shopping.client';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.page.html',
  styleUrls: ['./select-menu.page.scss'],
})
export class SelectMenuPage implements OnInit {

  public categoryCollection: Array<CategoryDto>;

  constructor(private recipesClient: RecipesClient) {
    recipesClient.getRecipeCollection().subscribe(x => {console.log(x); this.categoryCollection = x; });
  }

  ngOnInit() {
  }

  getQueryPrams(category: CategoryDto) {
    return ({name: category.name, filters: category.filters});
  }
}
