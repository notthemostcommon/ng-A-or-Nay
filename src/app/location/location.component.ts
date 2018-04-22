import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { LocationServiceService } from './location-service.service';
import { Subscription } from 'rxjs/Subscription';
import { MapGeoService } from '../map/map-geo.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 
  searchSubject = new Subject(); 
  locationInfo: any; 
  subscription: Subscription
  mapSubject = new Subject(); 
  currentRate: number = 4; 
  selected = 4;
  hovered = 0;
  readonly = true;

  private id; 
  private sub; 

  constructor(
    private route: ActivatedRoute, 
    private locationService: LocationServiceService, 
    private mapService: MapGeoService, 
    config: NgbRatingConfig
  ) { 
    this.locationService.dataString$
      .subscribe( data => {
        console.log("locationService data", data, "1");
        this.getSearchData(data); 
    })
    this.mapSubject
      .subscribe( results => {
      console.log("mapSubject results", results, "3");
      
      this.mapService.saveData(results)
    })
    config.max=5; 
    config.readonly = true; 
    
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.locationService.saveData(this.id); 
      
    })
  }

  getSearchData(query){   
     
    this.locationService
    .getLocationData(query)
    .then(data => {      
      this.locationInfo = data; 
      this.mapSubject.next(this.locationInfo[0]); 

      })
    }

  private ngOnDestroy(){
    console.log("ngOnDestroy");
    
    this.sub.unsubscribe(); 
  }
}
