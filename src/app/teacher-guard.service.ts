import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {TeacherService} from "./teacher.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeacherGuardService implements CanActivate {

  constructor(private teacherService: TeacherService, private router: Router) {
  }

  canActivate() {
    const isLoggedIn$ = this.teacherService.getLoggedInTeacher().pipe(map(teacher => Boolean(teacher.name)));
    isLoggedIn$.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(["login"])
      }
    })
    return isLoggedIn$
  }
}
