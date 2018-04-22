import { Component, OnInit, Input } from '@angular/core';
import { LocationServiceService } from '../location/location-service.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-location-overview',
  templateUrl: './location-overview.component.html',
  styleUrls: ['./location-overview.component.css']
})
export class LocationOverviewComponent implements OnInit {
  @Input() currentChoice: any; 
  locationSubject = new Subject(); 

  constructor(
    private locationService: LocationServiceService
  ) { }

  ngOnInit() {
  
    
  }
  



}
