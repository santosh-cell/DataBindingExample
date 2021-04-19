import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingExample';
  newPost= 'vishal';
  onAddPost() {
    this.newPost ='hi santosh';
    
  }
}
  
