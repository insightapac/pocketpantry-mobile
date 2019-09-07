import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RecipeCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RecipeCardComponent]
})
export class ComponentsModule { }
