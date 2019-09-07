import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;

  @Input() public refreshBtnFunction: () => void ;
  @Input() public addBtnFunction: () => void ;
  @Input() public deleteBtnFunction: () => void ;

  constructor() {}

  ngOnInit() {}

}
