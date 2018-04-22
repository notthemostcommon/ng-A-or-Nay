import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ResultsContainerComponent } from './results-container/results-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  }, 
  {
    path: 'results', 
    component: ResultsContainerComponent
  }, 
  
  {
    path: 'location/:id', 
    component: LocationComponent
  }, 
  {
    path: '**', 
    component: NotFoundComponent
  }, 
];


@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ], 

  declarations: []
})
export class RoutingModule { }
