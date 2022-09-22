import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

dataArray:any
  constructor(private ds:DataService) {
   this.ds.getAllposts().subscribe(data=>this.dataArray=data)
   }

  ngOnInit(): void {
    // this.ds.getAllposts()
  }

 
}
