import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from "../students.service";
import {TeacherService} from "../teacher.service";
import {Observable} from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {MatTable} from "@angular/material/table";
import {Route, Router} from "@angular/router";
import {StudentDetailsComponent} from "../student-details/student-details.component";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'teacher'];

  constructor(
    private studentsService: StudentsService,
    private teacherService: TeacherService,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  @ViewChild("studentTable") table: MatTable<any> | undefined;

  students: Observable<any> | undefined;

  ngOnInit(): void {
    this.teacherService.getLoggedInTeacher().subscribe(resp => {
      this.students = this.studentsService.getStudents(resp.name)
    });
  }

  openAddStudentDialog() {
    const ref = this.dialog.open(AddStudentDialog);
    ref.afterClosed().subscribe(() => {
      this.teacherService.getLoggedInTeacher().subscribe(resp => {
        this.students = this.studentsService.getStudents(resp.name)
        this.table?.renderRows()
      });
    })
  }

  redirectToStudent(studentId: string) {
    this.router.navigate(["students", studentId])
  }


}

@Component({
  selector: 'add-student-dialog',
  templateUrl: './add-student-dialog.html'
})
export class AddStudentDialog {
  studentNameControl = new FormControl();
  teacherControl = new FormControl();

  constructor(private studentService: StudentsService) {
  }

  addStudent() {
    this.studentService.addStudent(this.studentNameControl.value, this.teacherControl.value).subscribe(() => {
    })
  }

}
