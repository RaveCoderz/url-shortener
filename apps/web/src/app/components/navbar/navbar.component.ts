import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private app: AppComponent) {}

  title = this.app.title;

  navigation = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Apps',
      route: '/apps',
    },
    {
      label: 'Login',
      route: '/login',
    },
  ];
}
