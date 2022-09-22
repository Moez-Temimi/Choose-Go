import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


dataArray:any
  constructor(private ds:DataService) {
   this.ds.getAllposts().subscribe(data=>this.dataArray=data)
   }

  ngOnInit(): void {
    // this.ds.getAllposts()
  }
delete(id:any){
  this.ds.deletepost(id).subscribe(response=>console.log(response) )
}
 
}