import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedOnscrollComponent } from './pages/fixed-onscroll/fixed-onscroll.component';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';
import { OffcanvasComponent } from './pages/offcanvas/offcanvas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-two', component: Home2Component },
  { path: 'offcanvas', component: OffcanvasComponent },
  { path: 'fixed-onscroll', component: FixedOnscrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
