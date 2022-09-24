import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-sharepost',
  templateUrl: './sharepost.component.html',
  styleUrls: ['./sharepost.component.css']
})
export class SharepostComponent implements OnInit {
  imageUrl: any;
  imgFile: any;
  result:any;
  imageSrc:any;
  constructor(private userInfoService :UserInfoService,private  ds:DataService ,private route:Router, private http: HttpClient
    ) { 

    }
    
  ngOnInit(): void {
  }
  //add new post 
  // add(f:any){
  //   let data = f.value
  //   console.log(data);
  //   this.ds.addpost(data).subscribe((data)=>{console.log(data)
  //   this.route.navigate(['/profil'])
  // })
  // }
  //onChange_button
  onChange(event: any) {
    this.imgFile = event.target.files[0];
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
       this.imageSrc = reader.result;

        this.imageUrl = reader.result as string;
      };
      
    }
  }
  //onSubmit
  onSubmit(f: any) {
    let user =this.userInfoService.getUserInfos()
    if(confirm("Are you sure to add this post ?")) {
      
   let post = f.value
// let user =this.userInfoService.getUserInfos()
post.userID=user._id
console.log("user==>",post)
    const formData = new FormData();
    formData.append("upload_preset", "xjfviymd");
    formData.append('image', this.imageUrl);
    formData.append('file', this.imgFile);
   const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dtwuychif/upload`
    this.http.post(cloudinaryUrl,formData)
    .subscribe(result => {
      this.result =result
      post.img = this.result.secure_url
      
        this.ds.addpost(post).subscribe((post)=>{console.log(post)
          this.route.navigate(['/profil'])
        });
      },
      error => {
        console.log(error);
        
        this.imgFile = '';
      }
    );

    }
}}
