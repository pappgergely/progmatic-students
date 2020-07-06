import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./components/students/students.component";


const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'students' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
