import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'src/app/utils/api';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";


@Injectable()
export class ItemsService {
    constructor(private http: HttpClient) { }

    fetch(): Observable<any> {
        return this.http.get(Api.ITEMS_END_POINT).pipe(
            map((resp: any) => resp.data)
        )
    }
}

