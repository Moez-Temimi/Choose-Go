import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sharepost',
  templateUrl: './sharepost.component.html',
  styleUrls: ['./sharepost.component.css']
})
export class SharepostComponent implements OnInit {
  imageUrl: any;
  imgFile: any;

  constructor(private  ds:DataService ,private route:Router, private http: HttpClient
    ) { 

  }

  ngOnInit(): void {
  }
//add new post 
  add(f:any){
    let data = f.value
    console.log(data);
    this.ds.addpost(data).subscribe((data)=>{console.log(data)
    this.route.navigate(['/profil'])
  })
  }
  //onChange_button
  onChange(event: any) {
    this.imgFile = event.target.files[0];
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      console.log(reader.result,"<---url");
      
    }
  }
  //onSubmit
  onSubmit(f: any) {
   let post = f.value
    
    const formData = new FormData();
    formData.append("upload_preset", "xjfviymd");
    formData.append('image', this.imageUrl);
    formData.append('file', this.imgFile);
    console.log("formdata===>",formData)
   const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dtwuychif/upload`
    this.http.post(cloudinaryUrl,formData)
    .subscribe(result => {
       
      // post["image"] = result.secure_url
        console.log(result)},
      error => {
        console.log(error);
        
        this.imgFile = '';
        
      }
    );

    }
}
