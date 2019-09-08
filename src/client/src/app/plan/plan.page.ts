import { Component, OnInit } from '@angular/core';
import { RecipesClient, Recipe } from '../Clients/Shopping.client';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  public numMealsOptions = Array(10).fill(0).map((_, i) => i + 1);
  public totalMeals = 5;
  public recipeCollection: Array<Recipe>;

  constructor(private recipesClient: RecipesClient) {
    recipesClient.getRecipeAll().subscribe(x => this.recipeCollection = this.shuffle(x).slice(0, this.totalMeals));
  }

  ngOnInit() {  }

  public numMealsChange(val: number) {
    const diff = val - this.totalMeals;
    this.totalMeals = val;

    if (diff > 0) {
      this.recipesClient
        .getRecipeAll()
        .subscribe(x => this.recipeCollection.splice(this.recipeCollection.length, 0, ...this.shuffle(x).slice(0, diff)));
    } else if (diff < 0) {
      this.recipeCollection = this.recipeCollection.slice(0, this.totalMeals);
    }
  }

  public shuffleRecipes() {
    this.recipeCollection = [];
    this.recipesClient.getRecipeAll().subscribe(x => this.recipeCollection = this.shuffle(x).slice(0, this.totalMeals));
  }

  private shuffle<T>(array: Array<T>): Array<T> {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
