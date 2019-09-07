import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { ProfileFormComponent } from '../../app/components/profile-form/profile-form.component';
import {
    CheckboxCollectionComponent
} from '../components/lib/checkbox-collection/checkbox-collection.component';
import {
    TypeaheadCollectionComponent
} from '../components/lib/typeahead-collection/typeahead-collection.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }])
  ],
  declarations: [
    Tab5Page,
    ProfileFormComponent,
    CheckboxCollectionComponent,
    TypeaheadCollectionComponent
  ],
  providers:[
    FormBuilder
  ]
})
export class Tab5PageModule {}
