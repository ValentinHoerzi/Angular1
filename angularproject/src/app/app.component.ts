import { Component } from '@angular/core';
import { User } from './service-component/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Service Project';
  user: User;

  constructor() {
    this.user = new User(
      'Valentin Hörzi',
      'Developer',
      'Hydenstraße 14, 4600 Wels, Österreich',
      ['123-456', '123-789']
    );
  }
}
