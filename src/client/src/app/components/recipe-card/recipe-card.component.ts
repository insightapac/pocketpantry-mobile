import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/Clients/Shopping.client';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;

  @Input() public showRefresh: boolean;
  @Input() public showAdd: boolean;
  @Input() public showDelete: boolean;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onRefresh: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onAdd: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public refreshClicked() {
    this.onRefresh.emit();
  }

  public addClicked() {
    this.onAdd.emit();
  }

  public deleteClicked() {
    this.onDelete.emit();
  }
}
