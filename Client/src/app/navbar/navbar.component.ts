import { Component, OnInit } from '@angular/core';
import { AuthcheckService } from '../authcheck.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
check=null;
  constructor(private dataservices:DataService,private authcheck:AuthcheckService ) { }

  ngOnInit(): void {
  }
  //logout function
  Logout(){
   this.dataservices.logout().subscribe((result)=>{console.log(result);this.authcheck.gettingToken(this.check)})
  }
}
