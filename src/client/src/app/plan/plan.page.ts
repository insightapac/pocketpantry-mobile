import { Component, OnInit } from '@angular/core';

interface Recipe {
  name: string;
  description: string;
  tags: Array<string>;
  time: number;
  calories: number;
}

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
  public meals = Array(10).fill(0).map((_, i) => i + 1);

  public recipeCollection: Array<Recipe> = []
  constructor() { }

  ngOnInit() {  }

}
