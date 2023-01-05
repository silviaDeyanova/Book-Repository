import { TestGridstackComponent } from './components/test-gridstack/test-gridstack.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'home/book-description/:id', component: BookDescriptionComponent },
  { path: 'gridstack', component: TestGridstackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
