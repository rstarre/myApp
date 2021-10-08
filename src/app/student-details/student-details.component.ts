import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {StudentsService} from "../students.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  studentId: string = "0";

  constructor(private route: ActivatedRoute, private studentsService: StudentsService) {
    this.studentId = this.route.snapshot.params.id
  }

  studentGrades: Observable<any> | undefined;
  displayedColumns: any = ["subject", "value"];

  ngOnInit(): void {
    this.studentGrades = this.studentsService.getStudentDetails(this.studentId).pipe(map(student => {
        const result = [];
        for (const key in student.grades) {
          result.push({subject: key, value: student.grades[key]})
        }
        return result
      }
    ))
  }


}
