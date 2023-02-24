import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppsPageComponent } from './apps.component';
import { ShortenerPageComponent } from './shortener/shortener.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    title: 'Apps • ShitCoderz',
    component: AppsPageComponent,
  },
  {
    path: 'shortener',
    title: 'URL Shortener • ShitCoderz',
    component: ShortenerPageComponent,
  },
];

@NgModule({
  declarations: [AppsPageComponent, ShortenerPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AppsModule {}
