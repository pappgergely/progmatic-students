import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {UsersResponse} from "../interfaces/users-response";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UsersResponse>('https://progmatic.hu/frontend/students')
      .pipe(map( uResp => uResp.students ));
  }
}
