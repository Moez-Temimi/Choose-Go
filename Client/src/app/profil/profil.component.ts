import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  //dataArray is a table to store posts coming from backend
  dataArray: any = [];
  //setting the state "postdata" by getdata()
  postdata = {
    name: '',
    category: '',
    location: '',
    description: '',
    img:"",
    rate: 0,
    id: '',
  };
  //succes update message
  msg = '';
    //succes delete message
deleteMsg = '';

  //get allposts
  //please check this link ("https://jasonwatmore.com/post/2019/09/06/angular-http-get-request-examples")
  constructor(private ds: DataService) {
    this.ds.getAllposts().subscribe((data) => (this.dataArray = data)),
      (err: HttpErrorResponse) => console.log(err.message);
  }

  ngOnInit(): void {
    // this.ds.getAllposts()
  }

  //delete post
  //used stackoverflow for the popup of confirmation
  delete(id: any, i: number) {
    if(confirm("Are you sure to delete this post ?")) {
    this.ds.deletepost(id).subscribe((response) => {
      console.log(response);
      //deleting the post from front end using his index(a way to not make u refresh ur page ) u can check this link ("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice")
      this.dataArray.splice(i, 1);
      setTimeout(()=>{
        this.deleteMsg="post deleted with Success";
      },3000)
   
    }),
      (err: HttpErrorResponse) => console.log(err.message);
  }}
  //getting the data by id clicking on edit button
  getdata(
    name: string,
    category: string,
    location: string,
    description: string,
    img:string,
    rate: number,
    id: any
  ) {
    this.msg = '';
    this.postdata.name = name;
    this.postdata.category = category;
    this.postdata.location = location;
    this.postdata.description = description;
    this.postdata.img=img;
    this.postdata.rate = rate;
    this.postdata.id = id;
    console.log(this.postdata);
  }
  //update post
  updatepost(f: any) {
    let data = f.value;
    this.ds.updatepost(this.postdata.id, data).subscribe((response) => {
      console.log(response);
      //setting the update in front-end with the help of stackoverflow (no reload needed)
      //visit this link to check how to find out the index of an obj inside an array ("https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property")
      let indexID = this.dataArray.findIndex(
        (obj: any) => obj._id == this.postdata.id
      );
      this.dataArray[indexID].name = data.name;
      this.dataArray[indexID].category = data.category;
      this.dataArray[indexID].location = data.location;
      this.dataArray[indexID].description = data.description;
      this.dataArray[indexID].img = data.img;
      this.dataArray[indexID].rate = data.rate;
      this.msg = ' The Post is Updated with Success';
    }),
      (err: HttpErrorResponse) => console.log(err.message);
  }
}
