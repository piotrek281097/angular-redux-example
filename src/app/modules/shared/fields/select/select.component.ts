import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/utils/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
   <p [formGroup]='form'>
    <select [formControlName]="config.name">
    <option *ngFor="let opt of config.options">{{opt}}</option>
    </select>
    </p>
  `,
  styles: []
})
export class SelectComponent implements OnInit {

  config: FieldConfig;
  form: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
