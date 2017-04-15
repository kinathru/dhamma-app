import { PagerService } from './services/pager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

import { DhammadeshanaComponent } from './dhammadeshana/dhammadeshana.component';
import { PirithComponent } from './pirith/pirith.component';
import { PlayerComponent } from './player/player.component';
import { HomeSubDammaComponent } from './home-sub-damma/home-sub-damma.component';
import { HomeSubPirithComponent } from './home-sub-pirith/home-sub-pirith.component';
import { HomeSubBooksComponent } from './home-sub-books/home-sub-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    DhammadeshanaComponent,
    PirithComponent,
    PlayerComponent,
    HomeSubDammaComponent,
    HomeSubPirithComponent,
    HomeSubBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
