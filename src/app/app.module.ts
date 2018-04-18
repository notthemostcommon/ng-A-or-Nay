import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { LocationComponent } from './location/location.component';
import { LocationInfoComponent } from './location/location-info/location-info.component';
import { LocationOverviewComponent } from './location-overview/location-overview.component';
import { SearchComponent } from './search/search.component';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    LocationComponent,
    LocationInfoComponent,
    LocationOverviewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, 
    RoutingModule, 
    FormsModule, 
    HttpModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
