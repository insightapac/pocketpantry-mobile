import { FormBuilder, FormGroup } from '@angular/forms';
import { Input, EventEmitter, Output } from '@angular/core';

export abstract class BaseScsaForm {

    public formGroup: FormGroup;

    @Input() editMode = false;
    @Input() readOnly = false;
    @Input() disabled = false;

    @Output() saveForm: EventEmitter<any> = new EventEmitter<any>();
    @Output() formClear: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        protected formBuilder: FormBuilder
    ) { }

    // Check if the form is valid
    public get valid(): boolean {
        if (this.formGroup) {
            return this.formGroup.valid && this.onValidate();
        }

        return false;
    }

    // Returns the form values
    public get value(): any {
        if (this.formGroup) {
            return this.formGroup.value;
        }

        return null;
    }

    // Returns true if the form has been touched
    public get touched(): boolean {
        if (this.formGroup) {
            return this.formGroup.touched;
        }

        return false;
    }

    // Returns true if the form is dirty
    public get dirty(): boolean {
        if (this.formGroup) {
            return this.formGroup.dirty;
        }

        return false;
    }

    public clear(): void {
        this.editMode = false;
        this.formGroup.reset();
        this.formGroup.markAsPristine();
        this.formGroup.markAsUntouched();
        this.formClear.emit();
    }

    public save(): void {
        this.saveForm.emit(this.formGroup.value);
    }

    public onValidate(): boolean {
        return this.formGroup.valid;
    }

    public markAsDirty(): void {
        Object.keys(this.formGroup.controls).forEach(key => {
            this.formGroup.controls[key].markAsDirty();
        });
    }

    public onChange(): void { }

    public setFormValues(value: any): void {
        this.editMode = true;
    }

}
