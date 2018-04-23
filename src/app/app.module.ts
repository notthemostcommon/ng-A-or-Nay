import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { LocationComponent } from './location/location.component';
import { LocationInfoComponent } from './location/location-info/location-info.component';
import { LocationOverviewComponent } from './location-overview/location-overview.component';
import { SearchComponent } from './search/search.component';
import { RoutingModule } from './routing.module';
import { SearchService } from './search/search.service';
import { MapComponent } from './map/map.component';
import { ViolationsComponent } from './violations/violations.component';
import { AgmCoreModule } from '@agm/core';
import { ResultsContainerComponent } from './results-container/results-container.component'; 
import { MapGeoService } from './map/map-geo.service';
import { PhonePipe } from './phone.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationServiceService } from './location/location-service.service';
import { ReviewAddComponent } from './review-add/review-add.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { 
        MatMenuModule, 
        MatButtonModule, 
        MatIconModule, 
        MatCardModule, 
        MatSidenavModule, 
        MatNavList, 
        MatToolbar, 
        } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReviewService } from './review.service';
import { ReviewsByLocationComponent } from './reviews-by-location/reviews-by-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    LocationComponent,
    LocationInfoComponent,
    LocationOverviewComponent,
    SearchComponent,
    MapComponent,
    ViolationsComponent,
    ResultsContainerComponent,
    PhonePipe,
    NotFoundComponent,
    ReviewAddComponent,
    StarRatingComponent,
    NavbarComponent,
    SidenavComponent,
    ReviewsByLocationComponent

    
  ],
  imports: [
    BrowserModule, 
    RoutingModule, 
    FormsModule, 
    HttpModule,
    HttpClientModule, 
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJtlO1r8TrvZFcOXgnjb35DSQ0cS_Ljkw', 
    }),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule, 
    MatToolbarModule,
    MatListModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    
   
  ],
  providers: [SearchService, MapGeoService, LocationServiceService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
