import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedOnscrollComponent } from './pages/fixed-onscroll/fixed-onscroll.component';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';
import { OffcanvasComponent } from './pages/offcanvas/offcanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedOnscrollComponent,
    HomeComponent,
    Home2Component,
    OffcanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
