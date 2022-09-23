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
    return  this.http.get('http://localhost:3000/experience/getAll')
    
  }
  //add new post 
  addpost(post:any){
    return this.http.post('http://localhost:3000/experience/share',post)
  }
  // delete post 
  deletepost(id:any){
    return this.http.delete("http://localhost:3000/experience/delete/"+id)
  }
  //update post 
  updatepost(id:string,newpost:any){
return this.http.put("http://localhost:3000/experience/put/"+id,newpost)
  }

//user servives  
//adding a user
  addUser(user:any){
    return this.http.post('http://localhost:3000/users/signup',user)
  }

  //login user 
  login(user:any){
return this.http.post('http://localhost:3000/users/login',user)
  }

  //logout user
  logout(){
    return this.http.get('http://localhost:3000/users/logout')
  }
}
