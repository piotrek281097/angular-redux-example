import { Component, OnInit, Input, ContentChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: [`./data-grid.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush //zamiast setTimeout
})
export class DataGridComponent implements OnInit {

  @Input() data: any[];
  @Input() headers: any[];
  // @ContentChild('tpl', {static: false}) tpl; //contentChild umozliwa poznanie ng-temlate z # o nazwie tpl, to jest z items.component
  @ContentChild(TemplateRef, { static: false }) tpl;
  constructor() { }

  ngOnInit() {
  }

}
