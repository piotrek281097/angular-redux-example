import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/utils/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <p [formGroup]="form">
      <label>{{config.label}}</label>
      <input [value]="config.value" [formControlName]="config.name" [placeholder]="config.placeholder">
    </p>

    <div style="background:red"> 
      {{form.get(config.name).errors | json}}
    </div>
  `,
  styles: []
})
export class InputComponent implements OnInit {

  config: FieldConfig;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
