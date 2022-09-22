import {Component, OnInit} from '@angular/core';
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ziwi';
  
  ngOnInit() {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dtwuychif'
      }
    });
    

  }

}
