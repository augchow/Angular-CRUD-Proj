import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../_models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
    ) {}

    getAll() : Observable<any> {
        return this.http.get<User[]>(`${environment.apiUrl}/user`);
      }

    updateUser(user: User): Observable<any> {
        console.log(user.user_id,user);
        return this.http.put<User>(`${environment.apiUrl}/user/` + user.user_id, user, httpOptions)      
    }

}   

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json'
    })
}