import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText:any;
  allPost:any;
  constructor(private dataservices:DataService) { }

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
  this.dataservices.getAllposts().subscribe((result)=>{this.allPost=result})
}
}
