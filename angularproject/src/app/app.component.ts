import { Component } from '@angular/core';
import { User } from './service-component/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service Project';
  user: User;
  constructor(){
    this.user = new User("User1","Dev","here",["123","123"]);
  }
}
