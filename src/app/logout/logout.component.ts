import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../teacher.service";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.teacherService.logoutTeacher().subscribe(() => {
      this.router.navigate(["login"])
    })
  }

}
