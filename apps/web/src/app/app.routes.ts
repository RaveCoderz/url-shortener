import { Route } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default/default.component';
import { LoginPageComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { MainPageComponent } from './pages/main/main.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Main • ShitCoderz',
        component: MainPageComponent,
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./pages/apps/apps.module').then((m) => m.AppsModule),
      },
      {
        path: 'login',
        title: 'Login • ShitCoderz',
        component: LoginPageComponent,
      },
    ],
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];
