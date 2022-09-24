import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin:any;

  //message to display
  message:any;
  messageobj:any;

  constructor(private dataservices:DataService ,private http:HttpClient,private route:Router ) {}

  ngOnInit(): void {
  }

  //login function handling error
login(userlogin:any){
    this.dataservices.login(userlogin.value).subscribe((result)=>{ console.log(result);
    
      this.messageobj=result;this.message=this.messageobj.msg;
      this.route.navigate(['/home'])
    },
    (error)=>{this.messageobj=error;this.message=this.messageobj.error})
}

}
