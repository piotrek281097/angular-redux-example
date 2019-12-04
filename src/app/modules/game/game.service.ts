import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from 'src/app/utils/api';

@Injectable({providedIn: 'root'})
export class GameService {
    constructor(private http: HttpClient) { }

    register(username): Observable<any> {
        return this.http.post(Api.GAME_REGISTER_USER_END_POINT, { username }, { withCredentials: true });
    }


    getUser(): Observable<any> {
        return this.http.get(Api.GAME_GET_USER_END_POINT, { withCredentials: true });
    }

}
