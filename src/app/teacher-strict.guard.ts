import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {TeacherService} from "./teacher.service";
import {StudentsService} from "./students.service";

@Injectable({
  providedIn: 'root'
})
export class TeacherStrictGuard implements CanActivate {

  constructor(
    private teacherService: TeacherService,
    private studentService: StudentsService,
    private router: Router) {}


  async canActivate(route: ActivatedRouteSnapshot) {
    const studentId = route.params.id;

    const teacher = await this.teacherService.getLoggedInTeacher().toPromise();
    const student = await this.studentService.getStudentDetails(studentId).toPromise();
    const isAllowed = student.teacher === teacher.name

    if (!isAllowed) {
      this.router.navigate(["students"])
    }

    return isAllowed;
  }
}
