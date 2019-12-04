import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/utils/models';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit, OnChanges {

  form: FormGroup;
  config: any[];

  @Input() formConfig;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  ngOnChanges({formConfig: {currentValue}}: import("@angular/core").SimpleChanges): void {
    currentValue && this.createForm(currentValue); //wstawia dane jesli nie sa null
  }

  createForm(config: any[]) {
    this.config = config;
    config
      .filter((field) => field.type !== 'button')
      .forEach((field) => this.createField(field))
    }

  createField(field: FieldConfig): void {
    this.form.addControl(field.name, this.fb.control(field.value, this.getValidators(field.validation)));
  }

  onSubmit() {
    console.log(this.form.valid, this.form.value)
  }
  
  getValidators(validation: Object[]) {
    if (!validation) return;
    return validation.map((validator: Object) => {
      const [fn, param] = Object.entries(validator)[0];
      if (fn in Validators) {
        return param !== 'null' ? Validators[fn](param) : Validators[fn];
      }
    })
  }
}
