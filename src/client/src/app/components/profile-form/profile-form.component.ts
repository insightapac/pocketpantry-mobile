import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

  public groceryItems: Array<any> = [];
  public allergyItems: Array<any> = [];

  public formGroup: FormGroup;
  public allergyTypes: FormControl;
  public wasteItems: FormControl;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.allergyItems = [
      {
        value: false,
        label: 'Checkbox 1'
      },
      {
        value: true,
        label: 'Checkbox 2'
      },
      {
        value: false,
        label: 'Checkbox 3'
      },
      {
        value: false,
        label: 'Checkbox 4'
      },
      {
        value: false,
        label: 'Checkbox 5'
      },
      {
        value: false,
        label: 'Checkbox 6'
      }
    ]
    this.groceryItems = [
      {
        id: 1,
        label: 'Orange'
      }, {
        id: 2,
        label: 'Pear'
      }, {
        id: 3,
        label: 'Cucumber'
      }, {
        id: 4,
        label: 'Cheese'
      }, {
        id: 5,
        label: 'Potato'
      }
    ]
    this.configForm();
  }


  configForm(): void {
    this.allergyTypes = new FormControl(false);
    this.wasteItems = new FormControl(false);
    this.formGroup = this.formBuilder.group({
      allergyTypes: this.allergyTypes,
      wasteItems: this.wasteItems
    })
  }

  save(): void {

  }

}
