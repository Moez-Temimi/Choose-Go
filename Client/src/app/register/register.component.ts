import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:any;
  constructor(private dataservices:DataService ,http:HttpClient) { 
     }

  ngOnInit(): void {
  }
  signUP(user:any){
   this.dataservices.addUser(user.value).subscribe((result)=>console.log(result))
  }
}
