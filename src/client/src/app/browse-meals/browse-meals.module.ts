import { BrowseMealsComponent } from './browse-meals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: BrowseMealsComponent
  }
];

@NgModule({
  declarations: [BrowseMealsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class BrowseMealsModule { }
