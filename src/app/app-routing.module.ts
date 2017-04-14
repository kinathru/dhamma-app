import { PirithComponent } from './pirith/pirith.component';
import { DhammadeshanaComponent } from './dhammadeshana/dhammadeshana.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'dhammadeshana',
    component : DhammadeshanaComponent
  },
  {
    path: 'pirith',
    component : PirithComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: '**',
    component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
