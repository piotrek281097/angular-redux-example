import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/utils/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formConfig$: Observable<any>;

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.formConfig$ = this.http.get(Api.FORM_CONFIG_END_POINT).pipe(
      map((resp: any)=> resp.data)
    );
  }

}
