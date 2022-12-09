import { Component } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent {
  name=""
  rollNo=""
  admsnNo=""
  college=""

  data:any=[{"name":"vb","rollNo":1,"admsnNo":2,"college":"mce"},{"name":"vb2","rollNo":12,"admsnNo":22,"college":"mce2"}]

}
