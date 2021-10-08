import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {TeacherService} from "../teacher.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usernameControl = new FormControl();

  constructor(private router: Router, private teacherservice: TeacherService) {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.usernameControl.value)
    this.teacherservice.loginTeacher(this.usernameControl.value).subscribe(() => {
      this.router.navigate(["students"])
    })


  }

}
