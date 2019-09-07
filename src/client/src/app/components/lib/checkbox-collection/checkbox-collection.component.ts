import { Component, OnInit, Input, forwardRef, Optional, Host, SkipSelf } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-checkbox-collection',
  templateUrl: './checkbox-collection.component.html',
  styleUrls: ['./checkbox-collection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxCollectionComponent),
      multi: true
    }
  ]
})
export class CheckboxCollectionComponent implements OnInit, ControlValueAccessor {

  protected control: AbstractControl;
  public value: any;
  public id = null;
  public name = null;

  @Input() formControlName: string;
  @Input() items = [];
  @Input() label = '';

  constructor(
    @Optional() @Host() @SkipSelf()
    protected controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    // get the controller
    if (this.controlContainer) {
      this.control = this.controlContainer.control.get(this.formControlName);
      if (this.control === null || this.control === undefined) {
        throw new Error('Form component must have a formControlName="controlName"');
      }
      if (this.id === null || this.id === undefined) {
        this.id = `${this.formControlName}`;
      }
      if (this.name === null || this.name === undefined) {
        this.name = this.formControlName;
      }
    }
  }

  writeValue(value: any): void {

    //   if (value === null || value === undefined) {
    //     this.uncheckAll();
    //   }
    //   if (Array.isArray(value)) {
    //     this.list = value;
    //   }
    //  super.writeValue(value);
  }

  registerOnTouched(): void {

  }

  registerOnChange(): void {

  }


}
