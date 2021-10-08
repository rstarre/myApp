import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) {
  }

  getStudents(teacher: string): Observable<any> {
    return this.httpClient.get("http://localhost:3000/students?teacher=" + teacher)
  }

  addStudent(name: string, teacher: string): Observable<any> {
    return this.httpClient.post("http://localhost:3000/students", {"name": name, "teacher": teacher})
  }

  getStudentDetails(id: string) : Observable<any> {
    return this.httpClient.get("http://localhost:3000/students/" + id)
  }
}
