import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sharepost',
  templateUrl: './sharepost.component.html',
  styleUrls: ['./sharepost.component.css']
})
export class SharepostComponent implements OnInit {

  constructor(private  ds:DataService ,private route:Router) { 

  }

  ngOnInit(): void {
  }
//add new post 
  add(f:any){
    let data = f.value
    console.log(data);
    this.ds.addpost(data).subscribe((data)=>{console.log(data)
    this.route.navigate(['/home'])
  })
  }
}
