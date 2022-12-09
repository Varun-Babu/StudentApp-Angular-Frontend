import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { NavbarComponent } from './navbar/navbar.component';


const myRoute : Routes = [
  {
    path:"",
    component:AddStudentsComponent
  },
  {
    path:"view",
    component:ViewStudentsComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    ViewStudentsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
