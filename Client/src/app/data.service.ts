import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
   
  }
//get all data 
  getAllposts(){
    return  this.http.get('http://localhost:3000/getAll')
    
  }
  //add new post 
  addpost(post:any){
    return this.http.post('http://localhost:3000/share',post)
  }
}
