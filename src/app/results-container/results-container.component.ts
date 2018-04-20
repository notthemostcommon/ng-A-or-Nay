import { Component, OnInit } from '@angular/core';
import { MapGeoService } from '../map/map-geo.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.css'], 
})
export class ResultsContainerComponent implements OnInit {

  currentChoice: any; 
  mapSubject = new Subject(); 

  constructor(
    private mapService: MapGeoService
  ) { }

  ngOnInit() {
    this.mapSubject
    .subscribe( results => {
      console.log("mapSubject", results);
      this.mapService.saveData(results)
      
    })
  }

  setCurrentChoice($event){
    this.currentChoice = $event
    console.log("current choice", this.currentChoice);
    this.mapSubject.next($event); 
    
    
  }

}
