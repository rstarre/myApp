import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {MatInputModule} from "@angular/material/input";
import {Route, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {TeacherGuardService} from "./teacher-guard.service";
import {AddStudentDialog, StudentComponent} from './student/student.component';
import { LogoutComponent } from './logout/logout.component';
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import { StudentDetailsComponent } from './student-details/student-details.component';
import {TeacherStrictGuard} from "./teacher-strict.guard";
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Route[] = [
  {path: "login", component: LoginComponent},
  {path: "students", component: StudentComponent, canActivate: [TeacherGuardService]},
  {path: "students/:id", component: StudentDetailsComponent, canActivate: [TeacherStrictGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    LogoutComponent,
    AddStudentDialog,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FlexLayoutModule
  ],

  providers: [StudentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
