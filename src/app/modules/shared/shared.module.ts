import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldGeneratorDirective } from './field-generator.directive';
import { InputComponent } from './fields/input/input.component';
import { SelectComponent } from './fields/select/select.component';
import { ButtonComponent } from './fields/button/button.component';



@NgModule({
  declarations: [DataGridComponent, FormGeneratorComponent, FieldGeneratorDirective, InputComponent, SelectComponent, ButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DataGridComponent,
    FormGeneratorComponent
  ],
  entryComponents: [
    InputComponent,
    SelectComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
