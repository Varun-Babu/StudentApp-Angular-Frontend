import { Component } from '@angular/core';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  name=""
  rollNo=""
  admsnNo=""
  college=""

  viewData = () => {
    let data:any = {"name":this.name,"rollNo":this.rollNo,"admsnNo":this.admsnNo,"college":this.college}
    console.log(data) 
  }
data:any = []
}
