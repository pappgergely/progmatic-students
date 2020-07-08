import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {UsersResponse} from "../interfaces/users-response";
import {map} from "rxjs/operators";
import {AbstractControl, ValidationErrors} from "@angular/forms";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UsersResponse>(
      environment.apiEndpoint,
      { withCredentials: true }
    )
      .pipe(map( uResp => uResp.students ));
  }

  addUser(user: User): Observable<any> {
    return this.http.post(environment.apiEndpoint, {student: user}, { withCredentials: true });
  }

  deleteUser(userId: number): Observable<User[]> {
    return this.http.delete<UsersResponse>(
      `${environment.apiEndpoint}?id=${userId}`,
      { withCredentials: true }
    ).pipe(map( uResp => uResp.students ));
  }

  checkCapital(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.charAt(0)
      && control.value.charAt(0).toUpperCase() === control.value.charAt(0)) {
      return null;
    } else {
      return { capital: true };
    }
  }
}
