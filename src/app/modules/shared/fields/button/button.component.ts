import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/utils/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  template: `
    <p>
      <button type="submit">{{config.name}}</button>
    </p>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  config: FieldConfig;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
