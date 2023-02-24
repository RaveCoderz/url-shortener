import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultLayoutComponent } from './layout/default/default.component';
import { MainPageComponent } from './pages/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    FooterComponent,
    DefaultLayoutComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
