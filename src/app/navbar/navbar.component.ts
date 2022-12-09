import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  rollNo=""

  readValue = () =>{
    let data:any = {"rollNo":this.rollNo}
  }

}
