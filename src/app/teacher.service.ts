import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpclient: HttpClient) {
  }

  loginTeacher(name: string): Observable<any> {
    return this.httpclient.post("http://localhost:3000/loggedIn", {name})
  }

  logoutTeacher(): Observable<any> {
    return this.httpclient.post("http://localhost:3000/loggedIn", null)
  }

  getLoggedInTeacher(): Observable<any> {
    return this.httpclient.get("http://localhost:3000/loggedIn")
  }
}
