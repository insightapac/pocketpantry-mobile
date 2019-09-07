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
  public foodTypesItems: Array<any> = [];

  public formGroup: FormGroup;
  public allergyTypes: FormControl;
  public wastedItems: FormControl;
  public foodTypes: FormControl;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.allergyItems = [
      {
        value: false,
        label: 'Gluten '
      },
      {
        value: true,
        label: 'Peanut '
      },
      {
        value: false,
        label: 'Soy'
      },
      {
        value: false,
        label: 'Mustard'
      },
      {
        value: false,
        label: 'Sesame'
      },
      {
        value: false,
        label: 'Tree Nut'
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
    this.foodTypesItems = [
      {
        value: false,
        label: 'Asian'
      },
      {
        value: true,
        label: 'Italian'
      },
      {
        value: false,
        label: 'Thai'
      },
      {
        value: false,
        label: 'Indian'
      },
      {
        value: false,
        label: ' Aussie BBQ'
      },
      {
        value: false,
        label: 'Greek'
      }
    ]
    this.configForm();
  }


  configForm(): void {
    this.allergyTypes = new FormControl(false);
    this.wastedItems = new FormControl(false);
    this.foodTypes = new FormControl(false);
    this.formGroup = this.formBuilder.group({
      allergyTypes: this.allergyTypes,
      wastedItems: this.wastedItems,
      foodTypes: this.foodTypes
    });
    // TODO - Configure service
  }

  save(): void {
    // TODO - Save the changes
  }

}
