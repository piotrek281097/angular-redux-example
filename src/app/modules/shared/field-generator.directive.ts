import { Directive, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { InputComponent } from './fields/input/input.component';
import { SelectComponent } from './fields/select/select.component';
import { ButtonComponent } from './fields/button/button.component';


const fields = {
  input: InputComponent,
  select: SelectComponent,
  button: ButtonComponent
}

@Directive({
  selector: '[appFieldGenerator]'
})
export class FieldGeneratorDirective {

  @Input() set appFieldGenerator([config, form]) {
    
    const factory = this.resolver.resolveComponentFactory(fields[config.type])
    const comp: any = this.container.createComponent(factory);
    comp.instance.config = config;
    comp.instance.form = form;
  }
  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { 

  }

}
