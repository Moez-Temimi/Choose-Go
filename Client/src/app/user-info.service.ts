import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
user:any;
  constructor(private http:HttpClient) { }
  addUserInfos(infos:any){
    this.user=infos
  }
  getUserInfos(){
    console.log("get=>", this.user);
    return this.user
  }
  // get posts of the connected user
getPostsOfUser(){  
  console.log("id==>", this.user._id);
  
  return this.http.get(`http://localhost:3000/experience/posts/${this.user._id}`)
}

}
