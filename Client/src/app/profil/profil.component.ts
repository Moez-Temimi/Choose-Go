import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 
//dataArray is a table to store posts coming from backend
dataArray:any =[]
//setting the state "postdata" by getdata()
postdata={
  name:"",
  category:"",
  location:"",
  description:"",
  rate:0,
  id:""
}
//succes update message
msg=""

//get allposts to render them on profile
  constructor(private ds:DataService) {
   this.ds.getAllposts().subscribe(data=>this.dataArray=data)
   }

  ngOnInit(): void {
    // this.ds.getAllposts()
  }

  //delete post
delete(id:any,i:number){
  this.ds.deletepost(id).subscribe(response=>{
    console.log(response) 
    //deleting the post from front end using his index  (a way to not make u refresh ur page )
  this.dataArray.splice(i,1)
  })
}

getdata(name:string,category:string,location:string,description:string,rate:number,id:any){
  this.msg=''
this.postdata.name=name
this.postdata.category=category
this.postdata.location=location
this.postdata.description=description
this.postdata.rate=rate
this.postdata.id=id
console.log(this.postdata);

}
updatepost(f:any){
  let data = f.value
  this.ds.updatepost(this.postdata.id,data).subscribe(response=>{
    console.log(response)
  let indexID=this.dataArray.findIndex((obj:any)=>obj._id==this.postdata.id) 
  this.dataArray[indexID].name=data.name
  this.dataArray[indexID].category=data.category
  this.dataArray[indexID].location=data.location
  this.dataArray[indexID].description=data.description
  this.dataArray[indexID].rate=data.rate
  this.msg=" The Post is Updated with Success"
} ),
(err:HttpErrorResponse)=>console.log(err.message)

}
 
}