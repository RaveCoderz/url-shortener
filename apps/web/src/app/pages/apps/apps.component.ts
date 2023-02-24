import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsPageComponent {
  apps = [
    {
      label: 'URL Shortener',
      route: 'shortener',
    },
  ];
}
