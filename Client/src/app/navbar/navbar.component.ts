import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataservices:DataService) { }

  ngOnInit(): void {
  }
  //logout function
  Logout(){
   this.dataservices.logout().subscribe((result)=>{console.log(result)})
  }
}
